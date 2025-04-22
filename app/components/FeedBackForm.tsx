"use client";

import {
  Button,
  Card,
  Input,
  Textarea,
  Checkbox,
  Select,
  Alert,
  Divider,
} from "@heroui/react";
import { useState } from "react";
import {
  Send,
  Smile,
  Frown,
  Meh,
  ChevronDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedbackType: "",
    comments: "",
    improvements: [] as string[],
    contactPermission: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const improvementOptions = [
    "Course Content",
    "Instructor Clarity",
    "Assignment Quality",
    "Pacing",
    "Engagement",
    "Practical Relevance",
  ];

  const feedbackTypes = [
    { value: "general", label: "General Feedback" },
    { value: "bug", label: "Bug Report" },
    { value: "suggestion", label: "Feature Suggestion" },
    { value: "complaint", label: "Complaint" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.rating === 0) {
      newErrors.rating = "Please provide a rating";
    }

    if (!formData.feedbackType) {
      newErrors.feedbackType = "Please select a feedback type";
    }

    if (!formData.comments.trim()) {
      newErrors.comments = "Comments are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          rating: 0,
          feedbackType: "",
          comments: "",
          improvements: [],
          contactPermission: false,
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const newImprovements = prev.improvements.includes(option)
        ? prev.improvements.filter((item) => item !== option)
        : [...prev.improvements, option];
      return { ...prev, improvements: newImprovements };
    });
  };

  const getRatingIcon = (rating: number, index: number) => {
    if (index <= rating) {
      return rating >= 4 ? <Smile /> : rating >= 2 ? <Meh /> : <Frown />;
    }
    return <Meh />;
  };

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Course Feedback</h2>
      <p className="text-gray-600 mb-6">
        We value your input! Please share your experience to help us improve.
      </p>

      {submitSuccess && (
        <Alert color="success" icon={<CheckCircle />} className="mb-6">
          Thank you for your feedback! Your submission has been received.
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overall Course Rating
              {errors.rating && (
                <span className="text-red-500 text-xs ml-2">
                  {errors.rating}
                </span>
              )}
            </label>

            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button
                  key={num}
                  variant={formData.rating === num ? "solid" : "bordered"} // fixed here
                  color={
                    num <= 2 ? "danger" : num === 3 ? "warning" : "success" // fixed here
                  }
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, rating: num }))
                  }
                  size="sm" // fixed here
                >
                  {num <= 2 ? (
                    <Frown className="w-4 h-4" />
                  ) : num === 3 ? (
                    <Meh className="w-4 h-4" />
                  ) : (
                    <Smile className="w-4 h-4" />
                  )}
                </Button>
              ))}

              <span className="ml-3 text-sm text-gray-500">
                {formData.rating === 0
                  ? "Select rating"
                  : formData.rating === 1
                    ? "Very Poor"
                    : formData.rating === 2
                      ? "Poor"
                      : formData.rating === 3
                        ? "Average"
                        : formData.rating === 4
                          ? "Good"
                          : "Excellent"}
              </span>
            </div>
          </div>

          {/* Comments */}
          <div>
            <Textarea
              label="Your Feedback"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="What did you like or dislike about the course?"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {improvementOptions
              .filter((option) => option && option.trim() !== "")
              .map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <Checkbox
                    checked={formData.improvements.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </div>
              ))}
          </div>

          {/* Contact Permission */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="contact-permission"
              checked={formData.contactPermission}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  contactPermission: !prev.contactPermission,
                }))
              }
            />
            <label
              htmlFor="contact-permission"
              className="text-sm text-gray-700"
            >
              I agree to be contacted regarding my feedback
            </label>
          </div>

          <Divider />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" color="primary">
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
