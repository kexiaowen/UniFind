import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PostSchema = new SimpleSchema ({

  summary: {
    type: String,
    label: "Summary"
  },

  category: {
    type: String,
    label: "Category",
    allowedValues: ["Handphone", "Laptop", "Wallet", "Jacket", "Thumbdrive", "Waterbottle", "Others"],
    autoform: {
          afFieldInput: {
            firstOption: "(Select a category)"
          }
    }
  },

  colour:{
    type: String,
    label: "Colour",
    optional: true,
    autoform:{
      type: "select-radio-inline",
      options: [
        {label: "White"},
        {label: "Black"},
        {label: "Gold"},
        {label: "Silver"},
        {label:  "Others"}
      ]
    }

  },
  desc: {
    type: String,
    label: "Description (Useful information)",
    autoform:{
      type: "textarea",
      rows: 6
    }
  },

  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()

    },
    autoform: {
      type: "hidden"
    }
  }
});
