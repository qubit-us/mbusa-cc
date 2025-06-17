import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  facilityType: z.string().min(1, "Please select a facility type"),
  certificationLevel: z.string().min(1, "Please select a certification level"),
  addOnCertifications: z.array(z.string()).optional(),
  facilityName: z.string().min(1, "Facility name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  collisionCenterContactName: z.string().min(1, "Collision Center contact name is required"),
  collisionCenterEmail: z.string().email("Please enter a valid email address"),
  collisionCenterPhone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid US phone number (XXX) XXX-XXXX"),
  collisionCenterInitials: z.string().min(1, "Collision Center initials are required")
});

const US_STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const CollisionCenter = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addOnCertifications: []
    }
  });
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    }
    return value;
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue('collisionCenterPhone', formatted);
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log('Submitting application:', values);
    try {
      const response = await fetch('https://mbcollision.app.n8n.cloud/webhook-test/mbcc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
          source: 'Mercedes-Benz Collision Center Application'
        })
      });
      toast({
        title: "Application Submitted",
        description: "Your Mercedes-Benz Certified Collision Program application has been submitted successfully. You will receive a confirmation email shortly."
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in mb-12">
            <h1 className="text-4xl font-bold text-mercedes-charcoal mb-6">
              Mercedes-Benz Certified Collision Program Application
            </h1>
            
            <p className="text-lg text-mercedes-gray-medium max-w-4xl mx-auto mb-4">
              We are delighted to invite you to join the Mercedes-Benz Certified Collision Program. Your partnership is important to us, and we look forward to working together to deliver the highest standards of quality and service.
            </p>
            
            <br /><br />
            
            <p className="text-lg text-mercedes-gray-medium ">
              Please select one of the following options to get started:
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-delay-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Facility Type Selection */}
                <div className="space-y-4">
                  <p className="text-lg text-mercedes-gray-medium">
                    Please select one of the following options to get started:
                  </p>
                  <FormField control={form.control} name="facilityType" render={({
                  field
                }) => <FormItem className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="dealer-owned" checked={field.value === "dealer-owned"} onCheckedChange={checked => {
                        if (checked) field.onChange("dealer-owned");
                      }} />
                            <Label htmlFor="dealer-owned" className="text-sm">
                              Mercedes-Benz Dealer-Owned Collision Center (operating as part of the Mercedes-Benz Dealership)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="dealer-sponsored" checked={field.value === "dealer-sponsored"} onCheckedChange={checked => {
                        if (checked) field.onChange("dealer-sponsored");
                      }} />
                            <Label htmlFor="dealer-sponsored" className="text-sm">
                              Mercedes-Benz Dealer-Sponsored Independent Collision Center
                            </Label>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>} />
                </div>

                {/* Certification Level */}
                <div className="space-y-4">
                  <p className="text-lg text-mercedes-gray-medium">
                    Please select one of the following certification levels you would like to apply for:
                  </p>
                  <FormField control={form.control} name="certificationLevel" render={({
                  field
                }) => <FormItem className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="base-certified" checked={field.value === "base-certified"} onCheckedChange={checked => {
                        if (checked) field.onChange("base-certified");
                      }} />
                            <Label htmlFor="base-certified" className="text-sm">
                              Base Certified Collision Program
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="elite-certified" checked={field.value === "elite-certified"} onCheckedChange={checked => {
                        if (checked) field.onChange("elite-certified");
                      }} />
                            <Label htmlFor="elite-certified" className="text-sm">
                              Elite Certified Collision Program (Aluminum Structural Certification)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="vans-only" checked={field.value === "vans-only"} onCheckedChange={checked => {
                        if (checked) field.onChange("vans-only");
                      }} />
                            <Label htmlFor="vans-only" className="text-sm">
                              Vans Only Certified Collision Program
                            </Label>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>} />
                </div>

                {/* Add-on Certifications */}
                <div className="space-y-4">
                  <p className="text-lg text-mercedes-gray-medium">
                    Please select one or more add on certifications:
                  </p>
                  <FormField control={form.control} name="addOnCertifications" render={() => <FormItem className="space-y-4">
                        <div className="space-y-3">
                          {[{
                      id: "electric",
                      label: "Mercedes-Benz Electric Certified Collision Program (please note, only available as an add-on to Elite)"
                    }, {
                      id: "vans-addon",
                      label: "Vans Certified Collision Program (as add on to a BASE and ELITE certification)"
                    }, {
                      id: "none",
                      label: "None at this time- Note: You may add these electives at a later date"
                    }].map(item => <FormField key={item.id} control={form.control} name="addOnCertifications" render={({
                      field
                    }) => {
                      return <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox checked={field.value?.includes(item.id)} onCheckedChange={checked => {
                            return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter(value => value !== item.id));
                          }} />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>;
                    }} />)}
                        </div>
                      </FormItem>} />
                </div>

                <div className="py-4">
                  <br /><br />
                  <p className="text-sm text-mercedes-gray-medium mb-4">
                    Please ensure the application is complete and all parties have acknowledged the application before submitting it to MBUSA.
                  </p>
                  <br /><br />
                  <p className="text-sm text-mercedes-gray-medium">
                    Once your applications is received, the MBUSA Collision Team will review it to ensure there are no issues or concerns. Once approved, you will receive a "Preliminary Approval" email that will include next steps. For any questions reach out to us at mbcollision@mbusa.com — we're here to help and excited to support you on this journey!
                  </p>
                </div>

                <hr className="my-8" />

                {/* Collision Center Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-mercedes-charcoal text-center">
                    Collision Center Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="facilityName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Facility Name:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="address" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Address:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="city" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>City:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="state" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>State:</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {US_STATES.map(state => <SelectItem key={state} value={state}>
                                  {state}
                                </SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="zipCode" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Zip Code:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField
                      control={form.control}
                      name="collisionCenterContactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Collision Center Contact Name:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="collisionCenterEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Collision Center Email ID:</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="collisionCenterPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Collision Center Phone Number:</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              onChange={handlePhoneChange}
                              placeholder="(XXX) XXX-XXXX"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="collisionCenterInitials"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Collision Center Initials:</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button type="submit" disabled={isSubmitting} className="bg-mercedes-blue hover:bg-mercedes-blue-dark text-white px-8 py-3 text-lg">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>;
};
export default CollisionCenter;
