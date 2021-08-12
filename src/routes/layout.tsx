import React from "react";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/HomeFooter";

interface Props {
  component: React.FC,
  layout: string,
}

const AppLayout : React.FC<Props> = ({component, layout}) => {
  if(layout === 'dashboard'){
    return (
      <>{React.createElement(component)}</>
    );
  }
  return (
    <div>
      <Sidebar />
      {React.createElement(component)}
      <Footer />
    </div>
  );
}

export default AppLayout;
