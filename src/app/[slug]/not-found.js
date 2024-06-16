import { NOT_FOUND_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

export const metadata = {
  title: '404: Not Found',
};

const NotFound = () => {
  return (
    <main className="container">
      <PageTitle title="Page 404: Not Found. There is nothing here. Maybe try something else?" />
      <SubNavigation
        navigationItems={NOT_FOUND_SUB_NAVIGATION}
        showAll={false}
      />
    </main>
  );
};

export default NotFound;
