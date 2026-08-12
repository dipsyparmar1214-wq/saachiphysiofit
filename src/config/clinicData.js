export const clinicData = {
  name: "Saachi Physiotherapy & Ladies Fitness Clinic",
  shortName: "Saachi Physiotherapy & Ladies Fitness Clinic",
  tagline: "Restoring Movement, Empowering Women's Wellness",
  subTagline: "Expert orthopedic & general physiotherapy combined with specialized women's fitness & therapeutic rehabilitation in Bardoli.",
  phone: "+91 84879 41823",
  phoneRaw: "918487941823",
  whatsappNumber: "918487941823",
  address: "G1, G2, Maruti Complex, Opposite Kedareshvar Complex, Near Swaminarayan Mandir, Rajiv Nagar, Bardoli - 394601, Gujarat",
  mapsUrl: "https://www.google.com/maps/place/Saachi+Physiotherapy+and+ladies+Fitness+Clinic/@21.127401,73.1132857,17z/data=!3m1!4b1!4m6!3m5!1s0x3be06771818f0789:0xab94a957d6e16963!8m2!3d21.127401!4d73.1132857!16s%2Fg%2F11h03n3v0n",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJiQePgXFn4DkRY2nh1leptKo",
  mapsEmbedUrl: "https://maps.google.com/maps?q=21.127401,73.113286&t=&z=17&ie=UTF8&iwloc=&output=embed",
  
  socialLinks: {
    instagram: "https://www.instagram.com/saachifitness2018",
    facebook: "https://www.facebook.com/people/Saachi-physio-and-fitness/100063761091037/"
  },

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
      id: "post-operative-cases",
      title: "All Post Operative Cases",
      category: "Surgical Rehab",
      description: "Post-surgery physical therapy designed to reduce swelling, manage pain, prevent scar tissue, and restore full range of joint motion.",
      icon: "ShieldAlert",
      features: ["Custom Post-Op Protocol", "Range of Motion Exercises", "Swelling & Pain Management", "Safe Functional Recovery"]
    },
    {
      id: "all-surgical-cases",
      title: "All Surgical Cases",
      category: "Surgical Rehab",
      description: "Pre and post-surgical rehabilitation plans ensuring quick muscle recovery, joint stability, and safe return to daily activities.",
      icon: "Activity",
      features: ["Pre-Surgical Prep", "Post-Surgical Healing", "Strength Reconstruction", "Guided Recovery Sessions"]
    },
    {
      id: "tkr-thr",
      title: "TKR + THR (Total Knee & Hip Replacement)",
      category: "Joint Replacement",
      description: "Specialized post-replacement rehabilitation protocols for Total Knee Replacement (TKR) and Total Hip Replacement (THR) patients.",
      icon: "Bone",
      features: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Gait & Balance Retraining", "Joint Mobility Exercises"]
    },
    {
      id: "osteoarthritis",
      title: "Osteoarthritis Care",
      category: "Rheumatology",
      description: "Targeted joint decompression, electrotherapy, and strength conditioning to reduce cartilage wear and relieve severe knee/joint pain.",
      icon: "Bone",
      features: ["Knee & Joint Pain Relief", "Cartilage Support Therapy", "Stiffness Reduction", "Improved Joint Flexibility"]
    },
    {
      id: "rheumatoid-arthritis",
      title: "Rheumatoid Arthritis Therapy",
      category: "Rheumatology",
      description: "Gentle physical therapy, joint protection strategies, and gentle mobilization to control inflammation and maintain mobility.",
      icon: "Activity",
      features: ["Inflammation Control", "Joint Protection", "Morning Stiffness Relief", "Gentle Mobilization"]
    },
    {
      id: "lipo-therapy",
      title: "Lipo Therapy / Inch Loss Therapy",
      category: "Body Wellness",
      description: "Advanced non-invasive targeted lipo therapy sessions to reduce stubborn localized fat, firm tissues, and promote inch loss.",
      icon: "Sparkles",
      features: ["Targeted Inch Loss", "Non-Invasive Fat Reduction", "Body Contouring", "Tissue Firming"]
    },
    {
      id: "diet-consultation",
      title: "Diet Consultation & Counselling",
      category: "Nutrition & Health",
      description: "Personalized clinical nutritional planning and dietary counselling tailored to your recovery goals, metabolic health, and weight management.",
      icon: "UserCheck",
      features: ["Personalized Meal Plans", "Nutritional Counselling", "Weight & Metabolic Support", "Healthy Lifestyle Habits"]
    },
    {
      id: "polio-rehab",
      title: "Polio Rehabilitation",
      category: "Neurology",
      description: "Therapeutic muscle re-education, orthotic assistance guidance, and functional strength exercises for post-polio syndrome recovery.",
      icon: "Brain",
      features: ["Muscle Re-education", "Limb Mobility Exercises", "Posture & Balance Support", "Functional Strength Training"]
    },
    {
      id: "dmd-mnd",
      title: "DMD + MND Management",
      category: "Neuromuscular",
      description: "Specialized care for Duchenne Muscular Dystrophy (DMD) and Motor Neuron Disease (MND) to maintain muscle function and quality of life.",
      icon: "Brain",
      features: ["Contracture Prevention", "Gentle Passive Stretching", "Respiratory Muscle Support", "Quality of Life Enhancement"]
    },
    {
      id: "neurological-complaints",
      title: "Neurological Complaints",
      category: "Neurology",
      description: "Comprehensive evaluation and therapy for nerve entrapment, numbness, balance disorders, and nerve coordination issues.",
      icon: "Brain",
      features: ["Nerve Coordination", "Balance Retraining", "Numbness & Tingling Relief", "Proprioception Training"]
    },
    {
      id: "paralysis-care",
      title: "Paralysis & Stroke Recovery",
      category: "Neurology",
      description: "Dedicated stroke and paralysis rehab focusing on neuro-plasticity, gait training, arm/leg function restoration, and independent living.",
      icon: "Brain",
      features: ["Neuro-Plasticity Exercises", "Gait & Walking Retraining", "Motor Skill Recovery", "Spasticity Relief"]
    },
    {
      id: "tennis-elbow-fs-ct",
      title: "Tennis Elbow, FS & CT Syndrome",
      category: "Orthopedics",
      description: "Targeted electrotherapy and mobilization for Tennis Elbow, Frozen Shoulder (FS), and Carpal Tunnel (CT) Syndrome.",
      icon: "Stethoscope",
      features: ["Tennis Elbow Pain Relief", "Frozen Shoulder (FS) Mobilization", "Carpal Tunnel (CT) Relief", "Tendon Healing Modalities"]
    },
    {
      id: "all-fracture-cases",
      title: "All Fracture Cases",
      category: "Orthopedics",
      description: "Post-cast immobilization rehabilitation to eliminate stiffness, rebuild lost muscle mass, and restore full bone-joint strength.",
      icon: "Bone",
      features: ["Post-Cast Stiffness Relief", "Muscle Mass Reconstruction", "Bone Loading & Strength", "Joint Movement Restoration"]
    },
    {
      id: "weight-management",
      title: "Weight Management Program",
      category: "Fitness & Wellness",
      description: "Customized low-impact therapeutic exercise programs and fitness conditioning designed exclusively for women seeking healthy weight loss.",
      icon: "Sparkles",
      features: ["Therapeutic Weight Loss", "Low-Impact Cardio", "Core & Body Toning", "Sustained Metabolic Conditioning"]
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
      review: "I was suffering from severe lower back pain due to a slip disc (PIVD). Within 3 weeks of therapy at Saachi Clinic, my pain decreased significantly and I could return to my daily routine without discomfort!",
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
      question: "What conditions do you treat at Saachi Clinic?",
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
