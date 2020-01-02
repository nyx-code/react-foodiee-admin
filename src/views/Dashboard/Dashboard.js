import React, { Component } from 'react';

import {
  AppHeader,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarNav,
  AppSidebarFooter,
  AppSidebarMinimizer,
  AppSidebarForm,
  AppFooter
} from '@coreui/react';

import Header from "./Header"
import Footer from "./Footer"

import navigation from "../../_nav"

class Dashboard extends Component {

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <Header />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props}/>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
        </div>
        <AppFooter>
            <Footer />
        </AppFooter>
      </div>
    );
  }
}

export default Dashboard;
