// ---------------------------------------------------------------------------
// FEATURED PROJECTS — the one file to edit when a project changes.
//
// links.code / links.demo
//   Leave as '' (empty) until you have a REAL URL. While empty, the site shows
//   "coming soon" instead of a button. When you add a URL, the button appears.
//   Example: code: 'https://github.com/Onkar9823/hr-analytics-dashboard'
//
// status
//   null          -> no badge
//   'In Progress' -> shows an "In Progress" badge
//
// sections[].tone  ->  'done' | 'progress' | 'planned' | 'neutral'
//   Use these to keep finished work and planned work clearly separate.
//
// When a step is finished, change its `status` (pipeline) and move the item
// between sections. Do not add accuracy / F1 / ROC-AUC numbers until you have
// actually computed them.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    category: 'Business Intelligence',
    status: null,
    overview:
      'An interactive HR dashboard that tracks employee headcount, attrition rate, department-wise workforce and job satisfaction to highlight workforce trends.',
    objectives: [
      'Track employee headcount and attrition rate',
      'Break down the workforce by department',
      'Analyze job satisfaction',
      'Support HR decision-making with clear workforce trends',
    ],
    tech: ['Power BI', 'Excel', 'SQL','python'],
    diagram: { type: 'dashboard', variant: 'hr' },
    sections: [
      {
        title: 'What the dashboard includes',
        tone: 'neutral',
        items: [
          'Data cleaning before analysis',
          'KPI cards for headline workforce metrics',
          'Slicers for interactive filtering',
          'Visualizations that highlight workforce trends',
        ],
      },
    ],
    links: { code: '', demo: '' },
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    category: 'Machine Learning',
    status: 'In Progress',
    overview:
      'A machine learning workflow on the Telco Customer Churn dataset to analyze customer behavior and predict churn risk. Data cleaning and exploratory analysis are done; model evaluation and explainability are still planned.',
    objectives: [
      'Understand customer behavior through exploratory analysis',
      'Predict customers at risk of churning',
      'Account for class imbalance when evaluating the model',
      'Explain which factors drive churn predictions',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SHAP'],
    diagram: {
      type: 'pipeline',
      // status: 'done' | 'progress' | 'planned'
      steps: [
        { label: 'Telco Customer Churn dataset', status: 'done' },
        { label: 'Data cleaning', status: 'done' },
        { label: 'Exploratory analysis', status: 'done' },
        { label: 'Churn prediction model', status: 'done' },
        { label: 'Evaluation metrics', status: 'planned' },
        { label: 'SHAP explainability', status: 'planned' },
      ],
    },
    sections: [
      {
        title: 'Implemented',
        tone: 'done',
        items: [
          'Worked with the Telco Customer Churn dataset',
          'Data cleaning',
          'Exploratory analysis of customer behavior',
        ],
      },
      {
        title: 'In progress',
        tone: 'progress',
        items: ['Machine learning workflow for churn risk prediction (Scikit-learn)'],
      },
      {
        title: 'Planned',
        tone: 'planned',
        items: [
          'Evaluation with precision, recall, F1-score and ROC-AUC, chosen to account for class imbalance',
          'SHAP-based explainability to identify the key factors influencing churn predictions',
        ],
      },
    ],
    note: 'No model performance results are published for this project yet.',
    links: { code: '', demo: '' },
  },
  {
    id: 'sales-performance-dashboard',
    title: 'Sales Performance Analysis Dashboard',
    category: 'Business Intelligence',
    status: null,
    overview:
      'An interactive dashboard to monitor sales, revenue, profit and product and region performance, with KPI summaries and drill-down visuals.',
    objectives: [
      'Monitor sales, revenue and profit',
      'Compare product and region performance',
      'Compare results across categories and time periods',
      'Uncover trends with drill-down visuals',
    ],
    tech: ['Power BI', 'Excel', 'SQL','python'],
    diagram: { type: 'dashboard', variant: 'sales' },
    sections: [
      {
        title: 'What the dashboard includes',
        tone: 'neutral',
        items: [
          'KPI summaries for sales, revenue and profit',
          'Drill-down visuals to explore trends',
          'Interactive views to compare categories, products, regions and time periods',
        ],
      },
    ],
    links: { code: '', demo: '' },
  },
];
