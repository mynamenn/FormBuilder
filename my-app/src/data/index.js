const data = [{
    id: 1,                                                 // Shown in card
    status: "Sidebar",
    title: "Name",
    content: "Name"       // Shown in card
}, {
    id: 2,
    status: "Sidebar",
    title: "Email",
    content: "Email"
}, {
    id: 3,
    status: "Sidebar",
    title: "Interest Rate",
    content: "Interest Rate"
}, {
    id: 4,
    status: "Sidebar",
    title: "Loan Amount",
    content: "Loan Amount"
}];

const statuses = [{
    status: "Form",                       // Shown in card depending on status
    color: "#EB5A46"
}, {
    status: "Sidebar",
    color: "#00C2E0"
}];


export { data, statuses };