import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[0].lastName}`);
  }).catch(() => {
    console.error('Signup system offline');
  });
}
