import { checkForName } from './js/nameChecker';
import { inputLength } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Export checkForName and handleSubmit to Client library via webpack
export {
    checkForName,
    inputLength,
    handleSubmit
}

console.log(checkForName);