import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core'
 
class TextValidator extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <React.Fragment>
                <div className={`form-group form-group-default ${this.props.require ? 'required' : ''}`} aria-required="true">
                    <label>{this.props.label}</label>
                    <input
                        {...rest}
                        ref={(r) => { this.input = r; }}
                    />
                </div>
                {this.errorText()}
            </React.Fragment>
        );
    }
 
    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }
 
        return (
            
            <label className="error">{this.getErrorMessage()}</label>
        );
    }
}
 
export default TextValidator;