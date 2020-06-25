const data = [{
    id: 1,  
    icon: "⭕️",                                               // Shown in card
    status: "Form",
    title: "Name",
    content: "Name"       // Shown in card
}, {
    id: 2,
    icon: "⭕️",
    status: "Form",
    title: "Email",
    content: "Email"
}, {
    id: 3,
    icon: "⭕️",
    status: "Sidebar",
    title: "Interest Rate",
    content: "Interest Rate"
}, {
    id: 4,
    icon: "⭕️",
    status: "Sidebar",
    title: "Loan Amount",
    content: "Loan Amount"
}];

const statuses = [{
    status: "Form",
    icon: "⭕️",                       // Shown in card depending on status
    color: "#EB5A46"
}, {
    status: "Sidebar",
    icon: "🔆️",
    color: "#00C2E0"
}];


export { data, statuses };