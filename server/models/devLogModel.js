import mongoose from "mongoose";

const reusablePatternSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    codeSnippet: {
      type: String,
      default: "",
    },

    language: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false }
);

const linkSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      trim: true,
      required: true,
    },

    url: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { _id: false }
);

const journalEntrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
    },

    category: {
      type: String,
      enum: [
        "build-log",
        "debugging",
        "learning",
        "architecture",
        "deployment",
        "reflection",
      ],
      default: "build-log",
    },

    project: {
      type: String,
      enum: [
        "StudyZone",
        "Mortana",
        "GitHappens",
        "Broken Raj",
        "Research Highlighter",
        "Portfolio",
        "Other",
      ],
      default: "Other",
    },

    date: {
      type: Date,
      default: Date.now,
    },

    durationMinutes: {
      type: Number,
      min: 0,
      default: 0,
    },

    focusArea: {
      type: String,
      trim: true,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    objective: {
      type: String,
      default: "",
    },

    problemTrigger: {
      type: String,
      default: "",
    },

    conceptsLearned: {
      type: [String],
      default: [],
    },

    whatHappened: {
      type: String,
      default: "",
    },

    outcome: {
      type: String,
      default: "",
    },

    reusablePatterns: {
      type: [reusablePatternSchema],
      default: [],
    },

    mistakes: {
      type: [String],
      default: [],
    },

    watchOutForNextTime: {
      type: [String],
      default: [],
    },

    canBeAppliedAgainIn: {
      type: [String],
      default: [],
    },

    

    reflection: {
      type: String,
      default: "",
    },

    nextSteps: {
      type: [String],
      default: [],
    },

    links: {
      type: [linkSchema],
      default: [],
    },

    energyLevel: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },

    difficultyRating: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },

    confidenceBefore: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },

    confidenceAfter: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },

    visibility: {
      type: String,
      enum: ["private", "public", "unlisted"],
      default: "private",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    publicSummary: {
      type: String,
      default: "",
    },

    needsReview: {
      type: Boolean,
      default: false,
    },

    reviewDate: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: ["draft", "completed", "review-needed", "archived"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

journalEntrySchema.index({
  title: "text",
  tags: "text",
  focusArea: "text",
  project: "text",
  objective: "text",
  conceptsLearned: "text",
  publicSummary: "text",
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

export default JournalEntry;