import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import Dashboard from "../components/Theme-Casual/Dashboard";
import Social from "../components/Social";
import Email from "../components/Email";
import ComposeEmail from "../components/ComposeEmail";
import Cards from "../components/Card";
import Views from "../components/View";
import Chart from "../components/Chart";

import Calendar from "../components/Calendar/Basic";
import CalendarLang from "../components/Calendar/Languages";
import CalendarMonth from "../components/Calendar/Month";
import CalendarLazy from "../components/Calendar/Lazyload";
import CalendarDocs from "../components/Calendar/Documentation";

import Builder from "../components/Theme-Casual/Builder";

import LayoutsBox from "../components/Layouts/Box";
import LayoutsDefault from "../components/Layouts/Default";
import LayoutsRtl from "../components/Layouts/Rtl";
import LayoutsSecondary from "../components/Layouts/Secondary";

import UIElementsColor from "../components/UIElements/Color";
import UIElementstypography from "../components/UIElements/Typography";
import UIElementsIcons from "../components/UIElements/Icons";
import UIElementsButtons from "../components/UIElements/Buttons";
import UIElementsNotify from "../components/UIElements/Notification";
import UIElementsModal from "../components/UIElements/Modals";
import UIElementsProgressActivity from "../components/UIElements/ProgressAndActivity";
import UIElementsTabsAccordion from "../components/UIElements/TabsAndAccordion";
import UIElementsSliders from "../components/UIElements/Sliders";
import UIElementsTreeView from "../components/UIElements/TreeView";
import UIElementsNestables from "../components/UIElements/Nestables";

import FormElement from "../components/Forms/Elements";
import FormLayout from "../components/Forms/FormLayouts";
import FormWizard from "../components/Forms/Wizard";

import TableBasic from "../components/Tables/Basic";
import TableData from "../components/Tables/Data";

import MapGoogle from "../components/Maps/GoogleMap";
import MapVector from "../components/Maps/VectorMap";

import ExtraInvoice from "../components/Extra/Invoice";
import Extra400 from "../components/Extra/404Page";
import Extra500 from "../components/Extra/500Page";
import ExtraBlank from "../components/Extra/BlankPage";
import ExtraLogin from "../components/Extra/Login";
import ExtraRegister from "../components/Extra/register";
import ExtraLockScreen from "../components/Extra/LockScreen";
import ExtraGallery from "../components/Extra/Gallery";
import ExtraTimeLine from "../components/Extra/TimeLine";

import MenuLevelOne from "../components/MenuLevel/LevelOne";
import Submenu from "../components/MenuLevel/LevelTwo/Submenu";

import Header from "../components/Theme-Casual/Header";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Search from '../components/Theme-Casual/Search'
const Casual = ({ location }) => {
	const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);
	let path = location.pathname;

	return (
		<div>
			<div className="horizontal-menu-backdrop" style={mobileSidebarToggle ? { display: 'block', zIndex: 10 } : { display: 'none' }} ></div>

			{path.includes('/casual') &&
				!path.includes("/boxed_layout") &&
				!path.includes("/login") &&
				!path.includes("/register") &&
				!path.includes("/lock_screen") &&
				!path.includes("/404") &&
				!path.includes("/500") &&
				<Header location={location} openMobileToggle={(value) => setMobileSidebarToggle(value)} />}
			<Route exact={true} path="/casual" component={Dashboard} />
			{/* <Route path="/casual/dashboard" component={Dashboard} /> */}
			<Route path="/casual/social" component={Social} />
			<Route path="/casual/email/" component={Email} />
			<Route path="/casual/compose_email" component={ComposeEmail} />
			{/* START Calendar group routes */}
			<Route path="/casual/calendar/basic" component={Calendar} />
			<Route path="/casual/calendar/languages" component={CalendarLang} />
			<Route path="/casual/calendar/Month" component={CalendarMonth} />
			<Route path="/casual/calendar/lazyload" component={CalendarLazy} />
			<Route path="/casual/calendar_docs" component={CalendarDocs} />
			{/* END Calendar routes */}

			{/* START Builder route */}
			<Route path="/casual/builder" component={Builder} />
			{/* END builder route */}

			{/* START Layouts group routes */}
			<Route path="/casual/default_layout" component={LayoutsDefault} />
			<Route path="/casual/secondary_layout" component={LayoutsSecondary} />
			<Route path="/casual/boxed_layout" component={LayoutsBox} />
			<Route path="/casual/rtl_layout" component={LayoutsRtl} />
			{/* END Layouts routes */}

			{/* START UIElements group routes */}
			<Route path="/casual/color" component={UIElementsColor} />
			<Route path="/casual/typography" component={UIElementstypography} />
			<Route path="/casual/icons" component={UIElementsIcons} />
			<Route path="/casual/buttons" component={UIElementsButtons} />
			<Route path="/casual/notifications" component={UIElementsNotify} />
			<Route path="/casual/modals" component={UIElementsModal} />
			<Route path="/casual/progress" component={UIElementsProgressActivity} />
			<Route
				path="/casual/tabs_accordian"
				component={UIElementsTabsAccordion}
			/>
			<Route path="/casual/sliders" component={UIElementsSliders} />
			<Route path="/casual/tree_view" component={UIElementsTreeView} />
			<Route path="/casual/nestables" component={UIElementsNestables} />
			{/* END UIElements routes */}

			{/* START Forms group routes */}
			<Route path="/casual/form_elements" component={FormElement} />
			<Route path="/casual/form_layouts" component={FormLayout} />
			<Route path="/casual/form_wizard" component={FormWizard} />
			{/* END Forms routes */}

			<Route path="/casual/cards" component={Cards} />
			<Route path="/casual/views" component={Views} />

			{/* START Tables group routes */}
			<Route path="/casual/basic_tables" component={TableBasic} />
			<Route path="/casual/data_tables" component={TableData} />
			{/* END Tables routes */}

			{/* START Maps group routes */}
			<Route path="/casual/google_map" component={MapGoogle} />
			<Route path="/casual/vector_map" component={MapVector} />
			{/* END Maps routes */}

			<Route path="/casual/charts" component={Chart} />

			{/* START Extra group routes */}
			<Route path="/casual/extra/invoice" component={ExtraInvoice} />
			<Route path="/casual/extra/404" component={Extra400} />
			<Route path="/casual/extra/500" component={Extra500} />
			<Route path="/casual/extra/blank_template" component={ExtraBlank} />
			<Route path="/casual/extra/login" component={ExtraLogin} />
			<Route path="/casual/extra/register" component={ExtraRegister} />
			<Route path="/casual/extra/lock_screen" component={ExtraLockScreen} />
			<Route path="/casual/extra/gallery" component={ExtraGallery} />
			<Route path="/casual/extra/timeline" component={ExtraTimeLine} />
			{/* END Extra routes */}

			{/* START Menu Levels group routes */}
			<Route path="/casual/levelOne" component={MenuLevelOne} />
			<Route path="/casual/submenu" component={Submenu} />
			{/* END Menu Levels routes */}

			{/* <Route path="docs" component={}/>
        <Route path="change_log" component={}/> */}

			{/* <Quickview/>*/}
			{path.includes("/casual") && <Search />}
		</div>
	);
};

export default withRouter(Casual);
