/* Global */
import React from 'react';

/* Components */
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle';

/* Utils */
import { TITLE } from '@/utils/const/title';

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <main className="container grid">
      <DynamicTitle style="page-left" title={TITLE.HOMEPAGE} />
    </main>
  );
};

export default HomePage;
