import theme from "../config/styles";
export default (topics = [
  {
    name: "Saving",
    icon: require("../assets/images/outlinedIcons/saving.png"),
    background: theme.colors.vitalGreen,
    description: undefined,
    stages: [
      {
        id: 1,
        type: "content",
        lessonName: "Introduction",
        icon: require("../assets/images/outlinedIcons/business.png"),
        avaiable: true,
        isCompleted: false,
        text: "Start the Quiz to water and grow your sprout!"
      },
      {
        id: 2,
        type: "quiz",
        lessonName: "Quiz",
        icon: require("../assets/images/outlinedIcons/taxes.png"),
        isCompleted: false,
        avaiable: false,
        text: "Start the Calculator to water and grow your sprout!",
        answer: true,
        explanation:
          "Interest is defined as the cost of borrowing money. ... Simple interest is calculated on the principal amount of a loan only."
      },
      {
        id: 3,
        type: "application",
        lessonName: "Calculator",
        icon: require("../assets/images/outlinedIcons/insurance.png"),
        isCompleted: false,
        avaiable: false,
        text:
          "You've completed all the compound interest ! Your tree is full grown."
      }
    ]
  },
  {
    name: "Budgeting",
    icon: require("../assets/images/outlinedIcons/budgeting.png"),
    background: theme.colors.springGreen
  },
  {
    name: "Investment",
    icon: require("../assets/images/outlinedIcons/investment.png"),
    background: theme.colors.seaBlue
  },
  {
    name: "Mobile Wallet",
    icon: require("../assets/images/outlinedIcons/mobilewallet.png"),
    background: theme.colors.sunYellow
  },
  {
    name: "Taxes",
    icon: require("../assets/images/outlinedIcons/taxes.png"),
    background: theme.colors.cherryRed
  },
  {
    name: "Debt",
    icon: require("../assets/images/outlinedIcons/debt.png"),
    background: theme.colors.salmonPink
  },
  {
    name: "Insurance",
    icon: require("../assets/images/outlinedIcons/insurance.png"),
    background: theme.colors.activeOrange
  },
  {
    name: "Business",
    icon: require("../assets/images/outlinedIcons/business.png"),
    background: theme.colors.unitedNationBlue
  },
  {
    name: "International Money",
    icon: require("../assets/images/outlinedIcons/internationmoney.png"),
    background: theme.colors.lavender
  }
]);
