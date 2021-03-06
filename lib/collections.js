Attendees = new Mongo.Collection("attendees");

AttendeeSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name*"
  },
  lastName: {
    type: String,
    label: "Last Name*"
  },
  classYear: {
    type: String,
    label: "Class Year (YYYY)*",
    min: 4,
    max: 4
  },
  fri: {
    type: Boolean,
    label: "I will attend Friday",
    optional: true
  },
  friNum: {
    type: Number,
    label: "Total number of planned attendees for Friday:",
    optional: true,
    min: 0
  },
  sat: {
    type: Boolean,
    label: "I will attend Saturday",
    optional: true
  },
  satNum: {
    type: Number,
    label: "Total number of planned attendees for Saturday:",
    optional: true,
    min: 0
  },
  sun: {
    type: Boolean,
    label: "I will attend Sunday",
    optional: true
  },
  sunNum: {
    type: Number,
    label: "Total number of planned attendees for Sunday:",
    optional: true,
    min: 0
  },
  noAttend: {
    type: Boolean,
    label: "Unfortunately, I will not be able to attend any of the event",
    optional: true
  },
  comments: {
    type: String,
    label: "Notes (optional - these will displayed in the Guest List)",
    optional: true
  },
  createdOn: {
    type: Date,
    label: "RSVP submitted on",
    defaultValue: new Date()
  }
});

Attendees.attachSchema(AttendeeSchema);