const data = [{
    id: 1,                                                 // Shown in card
    status: "Form",
    title: "Name",
    content: "Name"       // Shown in card
}, {
    id: 2,
    status: "Form",
    title: "Email",
    content: "Email"
}, {
    id: 3,
    status: "Form",
    title: "Interest Rate",
    content: "Interest Rate"
},];

const statuses = [{
    status: "Form",                       // Shown in card depending on status
    color: "#EB5A46"
}, {
    status: "Sidebar",
    color: "#00C2E0"
}];

// // {
//     id: 4,
//     status: "Sidebar",
//     title: "Loan Amount",
//     content: "Loan Amount"
// },
// {
//     id: 5,
//     status: "Sidebar",
//     title: "Period",
//     content: "Period"
// }
export { data, statuses };