'use client';
import { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic.js';
const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = (): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export default AddCompanyButton;
