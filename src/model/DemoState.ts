import {FieldState, FormState} from "formstate";

class DemoState {
    required = (val: string) => !val && 'Value required';
    username = new FieldState('').validators((val) => !val && 'username required');
    password = new FieldState('').validators((val) => !val && 'password required');
    // Compose fields into a form
    form = new FormState({
        username: this.username,
        password: this.password
    });

    onSubmit = async () => {
        //  Validate all fields
        const res = await this.form.validate();
        // If any errors you would know
        if (res.hasError) {
            console.log(this.form.error);
            return;
        }
        // Yay .. all good. Do what you want with it
        console.log(this.username.$); // Validated value!
    };
}

const demoState = new DemoState()

export default demoState