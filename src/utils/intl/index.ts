import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  saveMissing: true,
  resources: {
    en: {
      translation: {
        home: 'Home',
        signup: 'Sign Up',
        signin: 'Sign In',
        email: 'Email',
        password: 'Password',
        form: 'Form',
        email_error: 'Please input your email',
        password_error: 'Please input your password!',
        unknown_error: 'Sorry something went wrong',
        user_created: 'Account successfully created',
        user_exist: 'Sorry account already exits',
        user_exist2: 'Sorry account already exits. Please sign in',
        logged_in: 'You are now logged in',
        login_signup: 'Login | Sign up',
        resources: 'Resources',
        about_us: 'About Us',
        logout: 'Logout',
        logout_ok: 'You are now logged out',
        logout_failed: 'Sorry failed to logout, please try again',
        app_beta_note:
          "🚀 Get ready to embark on an educational journey like never before with Sparked Next, the evolution of modern learning! We're thrilled to unveil the next chapter of our educational app, and it's packed with innovative features and enhancements that will elevate your learning experience.",
        admin: 'Admin',
        courses: 'Courses',
        dashboard: 'Dashboard',
        yes_im_sure: "Yes, I'm sure",
        no_cancel: 'No, cancel',
        deletion_confirmation_singular: 'Are you sure you want to delete this item?',
        deletion_confirmation_plural: 'Are you sure you want to delete these items?',

        create_unit: 'Create a New Unit',
        create_user: 'Create a New User',
        create_topic: 'Create a New Topic',
        create_school: 'Create a New School',
        create_course: 'Create a New Course',
        create_program: 'Create a New Program',
        create_resource: 'Create a New Resource',

        edit_unit: 'Edit a Unit',
        edit_user: 'Edit a User',
        edit_topic: 'Edit a Topic',
        edit_school: 'Edit a School',
        edit_course: 'Edit a Course',
        edit_program: 'Edit a Program',
        edit_media_content: 'Edit Media Content',

        name: 'Name',
        description: 'Description',
        school: 'School',
        program: 'Program',
        course: 'Course',
        topic: 'Topic',

        submit: 'Submit',
        upload_file: 'Upload File',

        users: 'Users',
        units: 'Units',
        topics: 'Topics',
        schools: 'Schools',
        programs: 'Programs',
        media_content: 'Media Content',

        new: 'New',
        delete: 'Delete',
      },
    },
  },
});
