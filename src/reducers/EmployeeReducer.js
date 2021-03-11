export const EmployeeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.newEmployee];

        case "REMOVE_EMPLOYEE":
            if(window.confirm("Are you sure want to delete!!")) {
                const filtered = state.filter( employee => employee.id !== action.id);
                return filtered;
            }   
            
            break;
            default:
                return state;
    }
}