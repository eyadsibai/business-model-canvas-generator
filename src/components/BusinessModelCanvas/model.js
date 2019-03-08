
export default {
  header: {
    value: '',
    placeholder: 'Your Business',
  },
  localStorageKey: 'businessModelCanvas',
  props: [
    {
      key: 'date',
      placeholder: 'Date',
      value: new Date().toLocaleDateString(),
    },
    {
      key: 'name',
      placeholder: 'Your Name',
      value: '',
    },
  ],
  sections: [
    {
      key: 'purpose',
      border: {
        bottom: true,
      },
      content: '',
      header: 'Purpose',
      isHeader: true,
      placeholder: 'Step 1:\nWhat is the business purpose? You need a clear vision to be able to validate the model.',
    },
    {
      key: 'customer-segments',
      border: {
        left: true,
      },
      content: '',
      header: 'Customer Segments',
      placeholder: 'Step 2:\nTo build an effective business model, a company must identify which customers it tries to serve.',
    },
    {
      key: 'value-propositions',
      border: {
        right: true,
        left: true,
      },
      content: '',
      header: 'Value Propositions',
      placeholder: 'Step 3:\nThe collection of products and services a business offers to meet the needs of its customers.',
    },
    {
      key: 'channels',
      border: {
        top: true,
      },
      content: '',
      header: 'Channels',
      placeholder: 'Step 4:\nA company can deliver its value proposition to its targeted customers through different channels.',
    },
    {
      key: 'customer-relationships',
      border: { },
      content: '',
      header: 'Customer Relationships',
      placeholder: 'Step 5:\nTo ensure the survival and success of any businesses, companies must identify the type of relationship they want to create with their customer segments.',
    },
    {
      key: 'revenue-streams',
      border: {
        top: true,
      },
      content: '',
      header: 'Revenue Streams',
      placeholder: 'Step 6:\nThe way a company makes income from each customer segment.',
    },
    {
      key: 'key-resources',
      border: {
        top: true,
      },
      content: '',
      header: 'Key Resources',
      placeholder: 'Step 7:\nThe resources that are necessary to create value for the customer.',
    },
    {
      key: 'key-activities',
      border: { },
      content: '',
      header: 'Key Activities',
      placeholder: 'Step 8:\nThe most important activities in executing a company\'s value proposition.',
    },
    {
      key: 'key-partners',
      border: {
        right: true,
      },
      content: '',
      header: 'Key Partners',
      placeholder: 'Step 9:\nIn order to optimise operations and reduce risks of a business model, organisations usually cultivate buyer-supplier relationships so they can focus on their core activity.',
    },
    {
      key: 'cost-structure',
      border: {
        top: true,
        right: true,
      },
      content: '',
      header: 'Cost Structure',
      placeholder: 'Step 10:\nThis describes the most important monetary consequences while operating under different business models.',
    },
  ],
}
