const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // fullName: () => {
    //     return `${this.firstName} ${this.lastName}`
    //THIS ARROW FUNCTION FORMAT RETURNS 'UNDEFINED UNDEFINED' BC THE KEYWORD THIS IS REFERRING TO THE SCOPE IT IS CREATED IN AND IS THEREFORE REFERENCING THE WINDOW OBJECT
    shoutName: function () {
        setTimeout(() => {  //THIS ARROW FUNCTION WITH KEYWORD THIS WORKS
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}