export const clinicData = {
  name: "Sacchi And Ladies Fitness Clinic",
  shortName: "Sacchi Clinic",
  tagline: "Restoring Movement, Empowering Women's Wellness",
  subTagline: "Expert orthopedic & general physiotherapy combined with specialized women's fitness & therapeutic rehabilitation in Bardoli.",
  phone: "+91 84879 41823",
  phoneRaw: "918487941823",
  whatsappNumber: "918487941823",
  address: "G1, G2, Maruti Complex, Opposite Kedareshvar Complex, Near Swaminarayan Mandir, Rajiv Nagar, Bardoli - 394601, Gujarat",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sacchi+And+Ladies+Fitness+Clinic+Maruti+Complex+Rajiv+Nagar+Bardoli+Gujarat+394601",
  
  timings: {
    weekdays: "Monday – Saturday: 9:00 AM – 12:00 PM & 2:00 PM – 5:30 PM",
    sunday: "Sunday: Closed",
    slots: [
      { start: "09:00", end: "12:00" },
      { start: "14:00", end: "17:30" }
    ]
  },

  trustBadges: [
    { title: "Certified Specialist", desc: "Qualified Physiotherapy Team", icon: "Award" },
    { title: "Women-Focused Care", desc: "Comfortable & Dedicated Environment", icon: "HeartHandshake" },
    { title: "Modern Equipment", desc: "Electrotherapy, Traction & Rehab", icon: "Activity" },
    { title: "Personalized Plans", desc: "Tailored to Individual Healing Goals", icon: "UserCheck" }
  ],

  services: [
    {
      id: "ortho-physio",
      title: "Orthopedic & General Physiotherapy",
      category: "Physiotherapy",
      description: "Targeted treatment for musculoskeletal conditions including joint pain, severe arthritis, chronic back pain, and Prolapsed Intervertebral Disc (PIVD / Slip Disc).",
      icon: "Bone",
      features: ["Joint Pain Relief", "PIVD & Back Care", "Arthritis Management", "Posture Correction"]
    },
    {
      id: "injury-rehab",
      title: "Injury & Post-Surgical Rehabilitation",
      category: "Rehabilitation",
      description: "Specialized recovery plans engineered to restore natural bodily movement, muscular strength, and joint function following surgeries or sports injuries.",
      icon: "Activity",
      features: ["Post-Op Recovery", "Sports Injury Care", "Mobility Restoration", "Muscle Re-education"]
    },
    {
      id: "therapeutic-tech",
      title: "Therapeutic Techniques",
      category: "Therapy",
      description: "Advanced electrotherapy, mechanical lumbar & cervical traction, manual mobilization, stretching, and physical therapy exercises for rapid pain relief.",
      icon: "Zap",
      features: ["Electrotherapy (IFT/TENS)", "Mechanical Traction", "Manual Mobilization", "Targeted Stretching"]
    },
    {
      id: "women-fitness",
      title: "Women's Fitness & Wellness",
      category: "Fitness",
      description: "Fitness and exercise conditioning programs designed specifically for women, focusing on weight management, pelvic health, and functional physical strength.",
      icon: "Sparkles",
      features: ["Weight Management", "Core & Pelvic Strength", "Functional Training", "Wellness Conditioning"]
    }
  ],

  whyChooseUs: [
    {
      title: "Women-Centric Comfort",
      desc: "A warm, respectful, and completely comfortable clinic environment tailored specifically for women of all ages.",
      icon: "ShieldCheck"
    },
    {
      title: "Evidence-Based Therapy",
      desc: "Scientific electrotherapy and targeted exercise modalities for faster, sustainable pain recovery.",
      icon: "Stethoscope"
    },
    {
      title: "Customized Recovery Plans",
      desc: "Every patient receives a personalized assessment and treatment schedule designed for their specific condition.",
      icon: "FileCheck"
    },
    {
      title: "Convenient Bardoli Location",
      desc: "Easily accessible Ground Floor clinic location at Maruti Complex with ample parking and easy mobility access.",
      icon: "MapPin"
    }
  ],

  processSteps: [
    { step: "01", title: "Comprehensive Assessment", desc: "Detailed evaluation of your pain, joint mobility, posture, and medical history." },
    { step: "02", title: "Customized Treatment Plan", desc: "Designing a targeted mix of electrotherapy, mobilization, and exercises." },
    { step: "03", title: "Active Rehabilitation", desc: "Hands-on therapy sessions with modern modalities under expert supervision." },
    { step: "04", title: "Long-term Prevention", desc: "Home exercise guidance and ergonomic tips to prevent symptom recurrence." }
  ],

  testimonials: [
    {
      name: "Meena Patel",
      sub: "Bardoli Resident",
      review: "I was suffering from severe lower back pain due to a slip disc (PIVD). Within 3 weeks of therapy at Sacchi Clinic, my pain decreased significantly and I could return to my daily routine without discomfort!",
      rating: 5
    },
    {
      name: "Pooja Sharma",
      sub: "Fitness & Posture Client",
      review: "The women's fitness conditioning program is amazing! It is safe, highly motivating, and conducted in a very comfortable environment. Highly recommended for every woman in Bardoli.",
      rating: 5
    },
    {
      name: "Sunita Chaudhari",
      sub: "Post-Knee Rehab Patient",
      review: "After my knee procedure, post-surgical rehabilitation here helped me regain my walking confidence. The electrotherapy and gentle exercise routines worked wonders.",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "What conditions do you treat at Sacchi Clinic?",
      answer: "We treat a wide spectrum of conditions including back pain, neck pain, PIVD (slip disc), arthritis, shoulder stiffness, sports injuries, post-surgical recovery, joint problems, and women's physical fitness."
    },
    {
      question: "Is this clinic specifically tailored for women?",
      answer: "Yes! We specialize in women's physiotherapy, postpartum rehabilitation, and customized women's fitness conditioning, ensuring a safe, supportive, and comfortable environment."
    },
    {
      question: "Do I need a doctor's prescription or referral before visiting?",
      answer: "No referral is necessary. You can book an appointment directly with us. If you have existing X-rays, MRI scans, or doctor reports, please bring them to your initial assessment."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book directly using our website booking form. Simply select your required service and preferred date/time slot, and it will immediately generate a pre-filled WhatsApp confirmation message!"
    }
  ]
};
