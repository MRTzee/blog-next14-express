'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import useRegister from '@/hooks/api/auth/useRegister';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to BlogHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="fullName"
                  type="text"
                  label="Full Name"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  error={formik.values.fullName}
                  isError={
                    !!formik.touched.fullName && !!formik.errors.fullName
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Email"
                  value={formik.values.email}
                  error={formik.values.email}
                  isError={!!formik.touched.email && !!formik.errors.email}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={formik.values.password}
                  error={formik.values.password}
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
