import moment from 'moment'
import { toastr } from 'react-redux-toastr'

export const updateProfile = (user) => 
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isloaded, isEmpty, ...updatedUser} = user;
        if (updatedUser.dateOfBirth) {
            updatedUser.dateOfBirth = moment(user.dateOfBirth).toDate();
        }

        try {
            await firebase.updateProfile(user);
            toastr.succes('succes', 'Profile updated')
        } catch (error) {
            console.log(error)
        }
    }