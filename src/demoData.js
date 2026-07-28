import { transformationImages } from "./assets.js";

/*
  This file contains fictional demonstration content for portfolio purposes.
  Replace all data with verified business information before commercial use.
*/
export const demoData = {
  socialProof: {
    rating: 4.9,
    reviewCount: 86,
    trustStatement: "Personalized coaching. Sustainable results.",
    result: "Average member stays 12+ months.",
    stars: 5
  },
  stats: [
    { value: "86+", label: "demo client reviews" },
    { value: "12+ mo", label: "average demo member stay" },
    { value: "4.9", label: "demo average rating" }
  ],
  credentials: [
    { label: "Personal Training", value: "Certified Coach" },
    { label: "Safety", value: "CPR/AED Certified" },
    { label: "Nutrition", value: "Nutrition Coaching" },
    { label: "Experience", value: "7+ Years Coaching" },
    { label: "Clients", value: "200+ Coached" }
  ],
  reviewSummary: {
    rating: 4.9,
    count: 86,
    themes: ["Personalized workouts", "Supportive coaching", "Accountability", "Welcoming environment", "Sustainable results"],
    distribution: [
      { stars: 5, percent: 92 },
      { stars: 4, percent: 7 },
      { stars: 3, percent: 1 },
      { stars: 2, percent: 0 },
      { stars: 1, percent: 0 }
    ]
  },
  testimonials: [
    {
      name: "Maya R.",
      descriptor: "Busy parent, fat-loss focus",
      rating: 5,
      quote: "The plan was clear without being overwhelming. I learned how to train, eat, and recover in a way that actually fit my week.",
      result: "Lost 18 pounds in 14 weeks",
      avatar: "MR"
    },
    {
      name: "Jordan K.",
      descriptor: "Strength building",
      rating: 5,
      quote: "I wanted to get stronger but kept jumping between random programs. No Limits gave me structure and helped me add weight safely.",
      result: "Added 55 pounds to deadlift",
      avatar: "JK"
    },
    {
      name: "Elena S.",
      descriptor: "Beginner confidence",
      rating: 5,
      quote: "I used to feel lost walking into a gym. The coaching made the basics click, and now training feels like something I belong doing.",
      result: "Completed first 12-week training block",
      avatar: "ES"
    },
    {
      name: "Marcus T.",
      descriptor: "Accountability and consistency",
      rating: 5,
      quote: "The check-ins made the difference. I had someone looking at the whole picture, not just telling me to work harder.",
      result: "Trained consistently for 6 months",
      avatar: "MT"
    },
    {
      name: "Dana L.",
      descriptor: "Returning after a long break",
      rating: 4,
      quote: "I had not trained consistently in years. The program met me where I was, built confidence, and helped me move better again.",
      result: "Returned to pain-free weekly training",
      avatar: "DL"
    }
  ],
  transformations: [
    {
      name: "Maya R.",
      duration: "16 weeks",
      headline: "Lost 22 pounds while keeping training sustainable",
      story: "Maya started with two coached sessions per week, simple nutrition targets, and a habit plan that worked around a busy family schedule.",
      results: ["22 pounds lost", "4 inch waist reduction", "Training 3 days per week"],
      programType: "Foundation Coaching",
      progressImage: transformationImages.mayaProgress,
      progressAlt: "Fictional demo before-and-after progress photo composite for Maya showing a realistic 16-week fitness transformation",
      beforeImage: transformationImages.mayaBefore,
      afterImage: transformationImages.mayaAfter,
      beforeAlt: "Demo before image for fictional client Maya in workout clothes at the gym",
      afterAlt: "Demo after image for fictional client Maya in workout clothes at the gym"
    },
    {
      name: "Jordan K.",
      duration: "20 weeks",
      headline: "Built strength and added 65 pounds to squat",
      story: "Jordan wanted clear progression without maxing out every week. The plan focused on technique, smart loading, and recovery habits.",
      results: ["65 pound squat increase", "First unassisted pull-up", "Better barbell confidence"],
      programType: "Performance Strength",
      progressImage: transformationImages.jordanProgress,
      progressAlt: "Fictional demo before-and-after progress photo composite for Jordan showing realistic strength progress",
      beforeImage: transformationImages.jordanBefore,
      afterImage: transformationImages.jordanAfter,
      beforeAlt: "Demo before image for fictional client Jordan standing in a gym",
      afterAlt: "Demo after image for fictional client Jordan standing in a gym"
    },
    {
      name: "Dana L.",
      duration: "12 weeks",
      headline: "Returned to consistent training after years away",
      story: "Dana rebuilt the basics with careful exercise selection, gradual conditioning, and weekly accountability instead of an all-or-nothing reset.",
      results: ["12 consistent weeks", "Improved movement confidence", "2 weekly strength sessions"],
      programType: "Progress Coaching",
      progressImage: transformationImages.danaProgress,
      progressAlt: "Fictional demo before-and-after progress photo composite for Dana returning to consistent training",
      beforeImage: transformationImages.danaBefore,
      afterImage: transformationImages.danaAfter,
      beforeAlt: "Demo before image for fictional client Dana beginning a training program",
      afterAlt: "Demo after image for fictional client Dana progressing in a training program"
    }
  ],
  pricing: [
    {
      name: "Foundation",
      price: "$249/mo",
      clientType: "Best for beginners or returners",
      frequency: "1 coached session weekly",
      features: ["Movement assessment", "Starter strength plan", "Weekly habit targets", "Progress tracking"],
      note: "Good starting point for building consistency."
    },
    {
      name: "Progress",
      price: "$429/mo",
      clientType: "Best for steady strength and physique goals",
      frequency: "2 coached sessions weekly",
      features: ["Custom training plan", "Nutrition guidance", "Weekly accountability", "Monthly progress review"],
      note: "Most balanced option for steady progress."
    },
    {
      name: "Performance",
      price: "$649/mo",
      clientType: "Best for focused body composition or strength goals",
      frequency: "3 coached sessions weekly",
      features: ["Priority scheduling", "Advanced progression", "Recovery strategy", "Direct check-in support"],
      note: "Built for clients who want more coaching touchpoints."
    }
  ],
  instagramPosts: [
    "https://www.instagram.com/p/DZnbsDUkdnV/",
    "https://www.instagram.com/p/DNCVXnItBrF/",
    "https://www.instagram.com/reel/DbWCJL6xU9X/",
    "https://www.instagram.com/p/DbCM51bDH_v/",
    "https://www.instagram.com/reel/DaA7YGDRtL7/"
  ],
  faqs: [
    {
      question: "What happens during the free consultation?",
      answer: "You will talk through your goals, training history, schedule, and what has or has not worked before. From there, No Limits can recommend a starting path."
    },
    {
      question: "Is personal training suitable for beginners?",
      answer: "Yes. Beginner clients get coached on movement basics, gym confidence, pacing, and simple habits before intensity is added."
    },
    {
      question: "Are programs customized?",
      answer: "Programs are designed around the client goal, current ability, schedule, recovery, and available equipment. The plan can adjust as life changes."
    },
    {
      question: "Where does training take place?",
      answer: "Training location details should be confirmed directly with the coach during consultation. This demo copy can be replaced with the exact gym or service area."
    },
    {
      question: "How often should I train?",
      answer: "Most clients start with two or three training days per week. The right frequency depends on goals, schedule, recovery, and experience level."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "Yes. Nutrition support focuses on practical targets, meal structure, consistency, and sustainable choices instead of extreme restriction."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Bring water, comfortable workout clothes, training shoes, and any notes about injuries, limitations, or goals you want the coach to know."
    },
    {
      question: "How do I get started?",
      answer: "Use the consultation form, send your contact details, and the coach can follow up with the next step."
    }
  ]
};
