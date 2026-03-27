import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  ADVANCEUI_KITS_ROUTES,
  APPS_ROUTES,
  AUTH_PAGES_ROUTES,
  CHART_ROUTES,
  DASHBOARD_ROUTES,
  ERROR_PAGES_ROUTES,
  FORMS_ELEMENTS,
  ICON_ROUTES,
  MAP_ROUTES,
  MISC_PAGE,
  MY_PAGES_ROUTES,
  OTHER_PAGES_ROUTES,
  READY_T0_USE_ROUTES,
  SMART_CLASS_ROUTINE_ROUTES,
  TABLES_ROUTES,
  UI_KITS_ROUTES,
  WIDGETS_PAGE,
} from "@/routes/routes";

import MainLayout from "@/components/layouts/MainLayout.tsx";

const Demo = React.lazy(() => import("@/pages/Demo"));

// ----------------------------- // Dashboard pages // ----------------------------- //

const EcommerceDashboard = React.lazy(
  () => import("@/pages/dashboard/ecommerce-dashboard")
);
const ProjectDashboard = React.lazy(
  () => import("@/pages/dashboard/project-dashboard")
);

// ----------------------------- //  Apps pages // ----------------------------- //

const Calendar = React.lazy(() => import("@/pages/apps/calendar"));
const Profile = React.lazy(() => import("@/pages/apps/profile-page/profile"));
const Setting = React.lazy(() => import("@/pages/apps/profile-page/setting"));
const Projects = React.lazy(
  () => import("@/pages/apps/projects-page/projects")
);
const ProjectDetails = React.lazy(
  () => import("@/pages/apps/projects-page/projects-details")
);
const Todo = React.lazy(() => import("@/pages/apps/todo"));
const Team = React.lazy(() => import("@/pages/apps/team"));
const Api = React.lazy(() => import("@/pages/apps/api"));
const Ticket = React.lazy(() => import("@/pages/apps/ticket-page/ticket"));
const TicketDetails = React.lazy(
  () => import("@/pages/apps/ticket-page/ticket-details")
);
const Email = React.lazy(() => import("@/pages/apps/email-page/email"));
const ReadEmail = React.lazy(
  () => import("@/pages/apps/email-page/read-email")
);
const Cart = React.lazy(() => import("@/pages/apps/e-shop/cart"));
const Product = React.lazy(() => import("@/pages/apps/e-shop/product"));
const AddProduct = React.lazy(() => import("@/pages/apps/e-shop/add-product"));
const ProductDetails = React.lazy(
  () => import("@/pages/apps/e-shop/product-details")
);
const ProductList = React.lazy(
  () => import("@/pages/apps/e-shop/product-list")
);
const Orders = React.lazy(() => import("@/pages/apps/e-shop/orders"));
const OrdersDetails = React.lazy(
  () => import("@/pages/apps/e-shop/orders-details")
);
const OrdersList = React.lazy(() => import("@/pages/apps/e-shop/orders-list"));
const Checkout = React.lazy(() => import("@/pages/apps/e-shop/checkout"));
const Wishlist = React.lazy(() => import("@/pages/apps/e-shop/wishlist"));
const Invoice = React.lazy(() => import("@/pages/apps/invoice"));
const Chat = React.lazy(() => import("@/pages/apps/chat"));
const FileManager = React.lazy(() => import("@/pages/apps/file-manager"));
const Bookmark = React.lazy(() => import("@/pages/apps/bookmark"));
const KanbanBoard = React.lazy(() => import("@/pages/apps/kanban-board"));
const Timeline = React.lazy(() => import("@/pages/apps/timeline"));
const Faq = React.lazy(() => import("@/pages/apps/faq"));
const Pricing = React.lazy(() => import("@/pages/apps/pricing"));
const Gallery = React.lazy(() => import("@/pages/apps/gallery"));
const Blog = React.lazy(() => import("@/pages/apps/blog-page/blog"));
const BlogDetails = React.lazy(
  () => import("@/pages/apps/blog-page/blog-details")
);
const AddBlog = React.lazy(() => import("@/pages/apps/blog-page/add-blog"));

// ----------------------------- //   Widgets pages // ----------------------------- //

const Widgets = React.lazy(() => import("@/pages/widgets"));

// ----------------------------- //   Ui-kits pages // ----------------------------- //

const Alert = React.lazy(() => import("@/pages/ui-kits/alert"));
const Badges = React.lazy(() => import("@/pages/ui-kits/badges"));
const Buttons = React.lazy(() => import("@/pages/ui-kits/buttons"));
const Cards = React.lazy(() => import("@/pages/ui-kits/cards"));
const Dropdown = React.lazy(() => import("@/pages/ui-kits/dropdown"));
const Grid = React.lazy(() => import("@/pages/ui-kits/grid"));
const Avatar = React.lazy(() => import("@/pages/ui-kits/avatar"));
const Tabs = React.lazy(() => import("@/pages/ui-kits/tabs"));
const Accordions = React.lazy(() => import("@/pages/ui-kits/accordions"));
const Progress = React.lazy(() => import("@/pages/ui-kits/progress"));
const Notifications = React.lazy(() => import("@/pages/ui-kits/notifications"));
const Lists = React.lazy(() => import("@/pages/ui-kits/lists"));
const Helperclasses = React.lazy(
  () => import("@/pages/ui-kits/helper-classes")
);
const Background = React.lazy(() => import("@/pages/ui-kits/background"));
const Divider = React.lazy(() => import("@/pages/ui-kits/divider"));
const Ribbons = React.lazy(() => import("@/pages/ui-kits/ribbons"));
const Editor = React.lazy(() => import("@/pages/ui-kits/editor"));
const Collapse = React.lazy(() => import("@/pages/ui-kits/collapse"));
const Shadow = React.lazy(() => import("@/pages/ui-kits/shadow"));
const Wrapper = React.lazy(() => import("@/pages/ui-kits/wrapper"));
const Bullet = React.lazy(() => import("@/pages/ui-kits/bullet"));
const Placeholder = React.lazy(() => import("@/pages/ui-kits/placeholder"));
const Alignment = React.lazy(() => import("@/pages/ui-kits/alignment-thing"));

// ----------------------------- //   Advance-ui pages // ----------------------------- //

const Modals = React.lazy(() => import("@/pages/advance-ui/modal"));
const OffcanvasToggle = React.lazy(
  () => import("@/pages/advance-ui/offcanvas-toggle")
);
const SweatAlert = React.lazy(() => import("@/pages/advance-ui/sweat-alert"));
const Scrollbar = React.lazy(() => import("@/pages/advance-ui/scrollbar"));
const Spinners = React.lazy(() => import("@/pages/advance-ui/spinners"));
const Animation = React.lazy(() => import("@/pages/advance-ui/animation"));
const VideoEmbed = React.lazy(() => import("@/pages/advance-ui/video-embed"));
const Draggable = React.lazy(() => import("@/pages/advance-ui/draggable"));
const CountUP = React.lazy(() => import("@/pages/advance-ui/count-up"));
const CountDown = React.lazy(() => import("@/pages/advance-ui/count-down"));
const PrismJS = React.lazy(() => import("@/pages/advance-ui/prismjs"));
const Rating = React.lazy(() => import("@/pages/advance-ui/rating"));
const TooltipPopover = React.lazy(
  () => import("@/pages/advance-ui/tooltip-popovers")
);
const Scrollpy = React.lazy(() => import("@/pages/advance-ui/scrollpy"));
const BootstrapSlider = React.lazy(
  () => import("@/pages/advance-ui/bootstrap-slider")
);
const Slider = React.lazy(() => import("@/pages/advance-ui/slider"));
const Tour = React.lazy(() => import("@/pages/advance-ui/tour"));

// ----------------------------- //  Icons pages// ----------------------------- //

const FontAwesome = React.lazy(() => import("@/pages/icons/font-awesome"));
const FlagIcon = React.lazy(() => import("@/pages/icons/flag"));
const TablerIcon = React.lazy(() => import("@/pages/icons/tabler"));
const WeatherIcon = React.lazy(() => import("@/pages/icons/weather"));
const AnimatedIcon = React.lazy(() => import("@/pages/icons/animated"));
const IconoirIcon = React.lazy(() => import("@/pages/icons/iconoir"));
const PhosphorIcon = React.lazy(() => import("@/pages/icons/phosphor"));

// ----------------------------- //  Misc pages // ----------------------------- //

const Misc = React.lazy(() => import("@/pages/misc"));

// ----------------------------- //  Map Pages // ----------------------------- //

const GoogleMap = React.lazy(() => import("@/pages/map/google-maps"));
const LeafletMap = React.lazy(() => import("@/pages/map/leaflet-map"));

// ----------------------------- //  Charts Pages // ----------------------------- //
const ChartJs = React.lazy(() => import("@/pages/charts/chart-js"));
const Linechart = React.lazy(() => import("@/pages/charts/apexchart/line"));
const Areachart = React.lazy(() => import("@/pages/charts/apexchart/area"));
const Columnchart = React.lazy(() => import("@/pages/charts/apexchart/column"));
const Barchart = React.lazy(() => import("@/pages/charts/apexchart/bar"));
const Mixedchart = React.lazy(() => import("@/pages/charts/apexchart/mixed"));
const Timelinechart = React.lazy(
  () => import("@/pages/charts/apexchart/timeline-range-bars")
);
const Candlestickchart = React.lazy(
  () => import("@/pages/charts/apexchart/candlestick")
);
const Boxplotchart = React.lazy(
  () => import("@/pages/charts/apexchart/boxplot")
);
const Bubblechart = React.lazy(() => import("@/pages/charts/apexchart/bubble"));
const Scatterchart = React.lazy(
  () => import("@/pages/charts/apexchart/scatter")
);
const HeatMapchart = React.lazy(
  () => import("@/pages/charts/apexchart/heatmap")
);
const TreeMapChart = React.lazy(
  () => import("@/pages/charts/apexchart/treemap")
);
const PieChart = React.lazy(() => import("@/pages/charts/apexchart/pie"));
const RadialBarChart = React.lazy(
  () => import("@/pages/charts/apexchart/radial-bar")
);

const RadarChart = React.lazy(
  () => import("@/pages/charts/apexchart/radar-chart")
);

// ----------------------------- //  Tables pages // ----------------------------- //

const BasicTable = React.lazy(() => import("@/pages/table/basic-table"));
const DataTable = React.lazy(() => import("@/pages/table/data-table"));
const ListJs = React.lazy(() => import("@/pages/table/list-js"));
const AdvanceTable = React.lazy(() => import("@/pages/table/advance-table"));

// ----------------------------- //  Forms Elements pages // ----------------------------- //

const FormsElements = React.lazy(
  () => import("@/pages/forms-elements/form-validation")
);
const BaseInput = React.lazy(() => import("@/pages/forms-elements/base-input"));
const CheckboxRadio = React.lazy(
  () => import("@/pages/forms-elements/checkbox-radio")
);
const InputGroups = React.lazy(
  () => import("@/pages/forms-elements/input-groups")
);
const InputMask = React.lazy(
  () => import("@/pages/forms-elements/input-masks")
);
const FloatingLabel = React.lazy(
  () => import("@/pages/forms-elements/floating-labels")
);
const DatetimePicker = React.lazy(
  () => import("@/pages/forms-elements/datetimepicker")
);
const TouchSpin = React.lazy(() => import("@/pages/forms-elements/touch-spin"));
const Select2 = React.lazy(() => import("@/pages/forms-elements/select2"));
const Switch = React.lazy(() => import("@/pages/forms-elements/switch"));
const RangeSlider = React.lazy(
  () => import("@/pages/forms-elements/range-slider")
);
const TypeAhead = React.lazy(() => import("@/pages/forms-elements/typeahead"));
const TextArea = React.lazy(() => import("@/pages/forms-elements/textarea"));
const ClipBoard = React.lazy(() => import("@/pages/forms-elements/clipboard"));
const FileUpload = React.lazy(
  () => import("@/pages/forms-elements/file-upload")
);
const DualListBoxes = React.lazy(
  () => import("@/pages/forms-elements/dual-list-boxes")
);
const DefaultForms = React.lazy(
  () => import("@/pages/forms-elements/default-forms")
);

// ----------------------------- // Ready-to-use pages // ----------------------------- //

const FormWizards = React.lazy(
  () => import("@/pages/ready-to-use/form-wizards")
);
const FormWizards1 = React.lazy(
  () => import("@/pages/ready-to-use/form-wizard-1")
);
const FormWizards2 = React.lazy(
  () => import("@/pages/ready-to-use/form-wizard-2")
);
const ReadyToUseForm = React.lazy(
  () => import("@/pages/ready-to-use/ready-to-use-form")
);
const ReadyToUseTable = React.lazy(
  () => import("@/pages/ready-to-use/ready-to-use-tables")
);

// ----------------------------- //  Auth pages // ----------------------------- //

const TwoStepVerificationImg = React.lazy(
  () => import("@/pages/auth-pages/two-step-verification-img")
);
const TwoStepVerification = React.lazy(
  () => import("@/pages/auth-pages/two-step-verification")
);
const LockScreenImg = React.lazy(
  () => import("@/pages/auth-pages/lock-screen-img")
);
const LockScreen = React.lazy(() => import("@/pages/auth-pages/lock-screen"));
const PasswordCreateImg = React.lazy(
  () => import("@/pages/auth-pages/password-create-img")
);
const PasswordCreate = React.lazy(
  () => import("@/pages/auth-pages/password-create")
);
const PasswordResetImg = React.lazy(
  () => import("@/pages/auth-pages/password-reset-img")
);
const PasswordReset = React.lazy(
  () => import("@/pages/auth-pages/password-reset")
);
const SignBgImg = React.lazy(
  () => import("@/pages/auth-pages/sign-up-with-bg-image")
);
const SignUp = React.lazy(() => import("@/pages/auth-pages/sign-up"));
const SignInBgImg = React.lazy(
  () => import("@/pages/auth-pages/sign-in-with-bg-image")
);
const SignIn = React.lazy(() => import("@/pages/auth-pages/sign-in"));

// ----------------------------- // Error pages // ----------------------------- //

const ServiceUnavailable = React.lazy(
  () => import("@/pages/error-pages/service-unavailable")
);
const InternalServer = React.lazy(
  () => import("@/pages/error-pages/internal-server")
);
const NotFound = React.lazy(() => import("@/pages/error-pages/not-found"));
const Forbidden = React.lazy(() => import("@/pages/error-pages/forbidden"));
const BadRequest = React.lazy(() => import("@/pages/error-pages/bad-request"));

// ----------------------------- // Other pages // ----------------------------- //

const TermsCondition = React.lazy(
  () => import("@/pages/other-pages/terms-condition")
);
const PrivacyPolicy = React.lazy(
  () => import("@/pages/other-pages/privacy-policy")
);
const Sitemap = React.lazy(() => import("@/pages/other-pages/sitemap"));
const Blank = React.lazy(() => import("@/pages/other-pages/blank"));
const Maintenance = React.lazy(() => import("@/pages/other-pages/maintenance"));
const ComingSoon = React.lazy(() => import("@/pages/other-pages/coming-soon"));
const Landing = React.lazy(() => import("@/pages/other-pages/landing"));

/////////////////
const Tanvir = React.lazy(() => import("@/modules/test"));
const ClassRoutine = React.lazy(() => import("@/modules/test"));

const Department = React.lazy(() => import("@/modules/SmartClassRoutine/department"));

const Course = React.lazy(() => import("@/modules/SmartClassRoutine/course"));

const Menu = React.lazy(() => import("@/modules/tms/menu"));

const Role = React.lazy(() => import("@/modules/tms/role"));


///////////////////

const routes = [
  // ----------------------------- // Dashboard Routes // ----------------------------- //

  { path: DASHBOARD_ROUTES.HOME_PAGE, component: <Demo /> },
  {
    path: "/",
    component: <EcommerceDashboard />,
  },
  {
    path: DASHBOARD_ROUTES.ECOMMERCE_DASHBOARD,
    component: <EcommerceDashboard />,
  },
  {
    path: DASHBOARD_ROUTES.PROJECT_DASHBOARD,
    component: <ProjectDashboard />,
  },

  // ----------------------------- //  Apps Routes // ----------------------------- //

  { path: APPS_ROUTES.CALENDAR_PAGE, component: <Calendar /> },

  { path: APPS_ROUTES.PROFILE_PAGE.PROFILE, component: <Profile /> },
  { path: APPS_ROUTES.PROFILE_PAGE.SETTING, component: <Setting /> },

  { path: APPS_ROUTES.PROJECTS_PAGE.PROJECTS, component: <Projects /> },
  {
    path: APPS_ROUTES.PROJECTS_PAGE.PROJECTS_DETAILS,
    component: <ProjectDetails />,
  },

  { path: APPS_ROUTES.TODO_PAGE, component: <Todo /> },
  { path: APPS_ROUTES.TEAM_PAGE, component: <Team /> },
  { path: APPS_ROUTES.API_PAGE, component: <Api /> },

  { path: APPS_ROUTES.TICKET_PAGE.TICKET, component: <Ticket /> },
  {
    path: APPS_ROUTES.TICKET_PAGE.TICKET_DETAILS,
    component: <TicketDetails />,
  },

  { path: APPS_ROUTES.EMAIL_PAGE.EMAIL, component: <Email /> },
  { path: APPS_ROUTES.EMAIL_PAGE.READ_EMAIL, component: <ReadEmail /> },

  { path: APPS_ROUTES.ESHOP_PAGE.CART, component: <Cart /> },
  { path: APPS_ROUTES.ESHOP_PAGE.PRODUCT, component: <Product /> },
  { path: APPS_ROUTES.ESHOP_PAGE.ADD_PRODUCT, component: <AddProduct /> },
  {
    path: APPS_ROUTES.ESHOP_PAGE.PRODUCT_DETAILS,
    component: <ProductDetails />,
  },
  { path: APPS_ROUTES.ESHOP_PAGE.PRODUCT_LIST, component: <ProductList /> },
  { path: APPS_ROUTES.ESHOP_PAGE.ORDERS, component: <Orders /> },
  { path: APPS_ROUTES.ESHOP_PAGE.ORDERS_DETAILS, component: <OrdersDetails /> },
  { path: APPS_ROUTES.ESHOP_PAGE.ORDERS_LIST, component: <OrdersList /> },
  { path: APPS_ROUTES.ESHOP_PAGE.CHECKOUT, component: <Checkout /> },
  { path: APPS_ROUTES.ESHOP_PAGE.WISHLIST, component: <Wishlist /> },

  { path: APPS_ROUTES.INVOICE_PAGE, component: <Invoice /> },
  { path: APPS_ROUTES.CHAT_PAGE, component: <Chat /> },
  { path: APPS_ROUTES.FILE_MANAGER_PAGE, component: <FileManager /> },
  { path: APPS_ROUTES.BOOKMARK_PAGE, component: <Bookmark /> },
  { path: APPS_ROUTES.KANBAN_BOARD_PAGE, component: <KanbanBoard /> },
  { path: APPS_ROUTES.TIMELINE_PAGE, component: <Timeline /> },
  { path: APPS_ROUTES.FAQ_PAGE, component: <Faq /> },
  { path: APPS_ROUTES.PRICING_PAGE, component: <Pricing /> },
  { path: APPS_ROUTES.GALLERY_PAGE, component: <Gallery /> },

  { path: APPS_ROUTES.BLOG_PAGE.BLOG, component: <Blog /> },
  { path: APPS_ROUTES.BLOG_PAGE.BLOG_DETAILS, component: <BlogDetails /> },
  { path: APPS_ROUTES.BLOG_PAGE.ADD_BLOG, component: <AddBlog /> },

  // ----------------------------- //   Widgets Routes // ----------------------------- //

  { path: WIDGETS_PAGE, component: <Widgets /> },

  // ----------------------------- //   Ui-kits Routes // ----------------------------- //

  { path: UI_KITS_ROUTES.ALERT_PAGE, component: <Alert /> },
  { path: UI_KITS_ROUTES.BADGES_PAGE, component: <Badges /> },
  { path: UI_KITS_ROUTES.BUTTONS_PAGE, component: <Buttons /> },
  { path: UI_KITS_ROUTES.CARDS_PAGE, component: <Cards /> },
  { path: UI_KITS_ROUTES.DROPDOWN_PAGE, component: <Dropdown /> },
  { path: UI_KITS_ROUTES.GRID_PAGE, component: <Grid /> },
  { path: UI_KITS_ROUTES.AVTAR_PAGE, component: <Avatar /> },
  { path: UI_KITS_ROUTES.TABS_PAGE, component: <Tabs /> },
  { path: UI_KITS_ROUTES.ACCORDIONS_PAGE, component: <Accordions /> },
  { path: UI_KITS_ROUTES.PROGRESS_PAGE, component: <Progress /> },
  { path: UI_KITS_ROUTES.NOTIFICATION_PAGE, component: <Notifications /> },
  { path: UI_KITS_ROUTES.LISTS_PAGE, component: <Lists /> },
  { path: UI_KITS_ROUTES.HELPERCLASSES_PAGE, component: <Helperclasses /> },
  { path: UI_KITS_ROUTES.BACKGROUND_PAGE, component: <Background /> },
  { path: UI_KITS_ROUTES.DIVIDER_PAGE, component: <Divider /> },
  { path: UI_KITS_ROUTES.RIBBONS_PAGE, component: <Ribbons /> },
  { path: UI_KITS_ROUTES.EDITOR_PAGE, component: <Editor /> },
  { path: UI_KITS_ROUTES.SHADOW_PAGE, component: <Shadow /> },
  { path: UI_KITS_ROUTES.WRAPPER_PAGE, component: <Wrapper /> },
  { path: UI_KITS_ROUTES.COLLAPSE_PAGE, component: <Collapse /> },
  { path: UI_KITS_ROUTES.BULLET_PAGE, component: <Bullet /> },
  { path: UI_KITS_ROUTES.PLACEHOLDER_PAGE, component: <Placeholder /> },
  { path: UI_KITS_ROUTES.ALIGNMENT_PAGE, component: <Alignment /> },

  // ----------------------------- //   Advance-ui Routes // ----------------------------- //

  { path: ADVANCEUI_KITS_ROUTES.MODAL_PAGE, component: <Modals /> },
  {
    path: ADVANCEUI_KITS_ROUTES.OFFCANVAS_PAGE,
    component: <OffcanvasToggle />,
  },
  { path: ADVANCEUI_KITS_ROUTES.SWEAT_ALERT_PAGE, component: <SweatAlert /> },
  { path: ADVANCEUI_KITS_ROUTES.SCROLLBAR_PAGE, component: <Scrollbar /> },
  { path: ADVANCEUI_KITS_ROUTES.SPINNERS_PAGE, component: <Spinners /> },
  { path: ADVANCEUI_KITS_ROUTES.ANIMATION_PAGE, component: <Animation /> },
  { path: ADVANCEUI_KITS_ROUTES.VIDEO_EMBED_PAGE, component: <VideoEmbed /> },
  { path: ADVANCEUI_KITS_ROUTES.DRAGGABLE_PAGE, component: <Draggable /> },
  { path: ADVANCEUI_KITS_ROUTES.COUNT_UP_PAGE, component: <CountUP /> },
  { path: ADVANCEUI_KITS_ROUTES.COUNT_DOWN_PAGE, component: <CountDown /> },
  { path: ADVANCEUI_KITS_ROUTES.PRISM_JS_PAGE, component: <PrismJS /> },
  { path: ADVANCEUI_KITS_ROUTES.RATING_PAGE, component: <Rating /> },
  {
    path: ADVANCEUI_KITS_ROUTES.TOOLTIP_POPOVER_PAGE,
    component: <TooltipPopover />,
  },
  { path: ADVANCEUI_KITS_ROUTES.SCROLLPY_PAGE, component: <Scrollpy /> },
  {
    path: ADVANCEUI_KITS_ROUTES.BOOTSTRAP_SLIDER_PAGE,
    component: <BootstrapSlider />,
  },
  { path: ADVANCEUI_KITS_ROUTES.SLIDER_PAGE, component: <Slider /> },
  { path: ADVANCEUI_KITS_ROUTES.TOUR_PAGE, component: <Tour /> },

  // ----------------------------- //  Icons Routes// ----------------------------- //

  { path: ICON_ROUTES.FONTAWESOME_PAGE, component: <FontAwesome /> },
  { path: ICON_ROUTES.FLAG_ICON_PAGE, component: <FlagIcon /> },
  { path: ICON_ROUTES.TABLER_ICON_PAGE, component: <TablerIcon /> },
  { path: ICON_ROUTES.WEATHER_ICON_PAGE, component: <WeatherIcon /> },
  { path: ICON_ROUTES.ANIMATED_ICON_PAGE, component: <AnimatedIcon /> },
  { path: ICON_ROUTES.ICONOIR_ICON_PAGE, component: <IconoirIcon /> },
  { path: ICON_ROUTES.PHOSPHOR_ICON_PAGE, component: <PhosphorIcon /> },

  // ----------------------------- //  Misc Routes // ----------------------------- //
  { path: MISC_PAGE, component: <Misc /> },

  // ----------------------------- //  Map Routes // ----------------------------- //

  { path: MAP_ROUTES.GOOGLE_MAP_PAGE, component: <GoogleMap /> },
  { path: MAP_ROUTES.LEAFLET_MAP_PAGE, component: <LeafletMap /> },

  // ----------------------------- //  Charts Routes // ----------------------------- //

  { path: CHART_ROUTES.CHART_JS_PAGE, component: <ChartJs /> },
  { path: CHART_ROUTES.LINE_CHART_PAGE, component: <Linechart /> },
  { path: CHART_ROUTES.AREA_CHART_PAGE, component: <Areachart /> },
  { path: CHART_ROUTES.COLUMN_CHART_PAGE, component: <Columnchart /> },
  { path: CHART_ROUTES.BAR_CHART_PAGE, component: <Barchart /> },
  { path: CHART_ROUTES.MIXED_CHART_PAGE, component: <Mixedchart /> },
  { path: CHART_ROUTES.TIMELINE_CHART_PAGE, component: <Timelinechart /> },
  {
    path: CHART_ROUTES.CANDLESTICK_CHART_PAGE,
    component: <Candlestickchart />,
  },
  { path: CHART_ROUTES.BOXPLOT_CHART_PAGE, component: <Boxplotchart /> },
  { path: CHART_ROUTES.BUBBLE_CHART_PAGE, component: <Bubblechart /> },
  { path: CHART_ROUTES.SCATTER_CHART_PAGE, component: <Scatterchart /> },
  { path: CHART_ROUTES.HEATMAP_CHART_PAGE, component: <HeatMapchart /> },
  { path: CHART_ROUTES.TREEMAP_CHART_PAGE, component: <TreeMapChart /> },
  { path: CHART_ROUTES.PIE_CHART_PAGE, component: <PieChart /> },
  { path: CHART_ROUTES.RADIAL_BAR_CHART_PAGE, component: <RadialBarChart /> },
  { path: CHART_ROUTES.RADAR_CHART_PAGE, component: <RadarChart /> },

  // ----------------------------- //  Tables Routes // ----------------------------- //

  { path: TABLES_ROUTES.BASIC_TABLE_PAGE, component: <BasicTable /> },
  { path: TABLES_ROUTES.DATA_TABLE_PAGE, component: <DataTable /> },
  { path: TABLES_ROUTES.LIST_JS_PAGE, component: <ListJs /> },
  { path: TABLES_ROUTES.ADVANCE_TABLE_PAGE, component: <AdvanceTable /> },
  { path: TABLES_ROUTES.BASIC_TABLE_PAGE, component: <RadarChart /> },

  // ----------------------------- //  Forms Elements Routes // ----------------------------- //

  { path: FORMS_ELEMENTS.FORMS_ELEMENTS_PAGE, component: <FormsElements /> },

  { path: FORMS_ELEMENTS.BASE_INPUT_PAGE, component: <BaseInput /> },
  { path: FORMS_ELEMENTS.CHECKBOX_RADIO_PAGE, component: <CheckboxRadio /> },
  { path: FORMS_ELEMENTS.INPUT_GROUPS_PAGE, component: <InputGroups /> },
  { path: FORMS_ELEMENTS.INPUT_MASKS_PAGE, component: <InputMask /> },
  { path: FORMS_ELEMENTS.FLOATING_LABELS_PAGE, component: <FloatingLabel /> },
  { path: FORMS_ELEMENTS.DATETIME_PICKER_PAGE, component: <DatetimePicker /> },
  { path: FORMS_ELEMENTS.TOUCH_SPIN_PAGE, component: <TouchSpin /> },
  { path: FORMS_ELEMENTS.SELECT2_PAGE, component: <Select2 /> },
  { path: FORMS_ELEMENTS.SWITCH_PAGE, component: <Switch /> },
  { path: FORMS_ELEMENTS.RANGE_SLIDER_PAGE, component: <RangeSlider /> },
  { path: FORMS_ELEMENTS.TYPEAHEAD_PAGE, component: <TypeAhead /> },
  { path: FORMS_ELEMENTS.TEXT_AREA_PAGE, component: <TextArea /> },
  { path: FORMS_ELEMENTS.CLIPBOARD_PAGE, component: <ClipBoard /> },
  { path: FORMS_ELEMENTS.FILE_UPLOAD_PAGE, component: <FileUpload /> },
  { path: FORMS_ELEMENTS.DUAL_LIST_BOX_PAGE, component: <DualListBoxes /> },
  { path: FORMS_ELEMENTS.DEFAULT_FORMS_PAGE, component: <DefaultForms /> },

  // ----------------------------- // Ready-to-use Routes // ----------------------------- //

  { path: READY_T0_USE_ROUTES.FORM_WIZARDS_PAGE, component: <FormWizards /> },
  { path: READY_T0_USE_ROUTES.FORM_WIZARDS1_PAGE, component: <FormWizards1 /> },
  { path: READY_T0_USE_ROUTES.FORM_WIZARDS2_PAGE, component: <FormWizards2 /> },
  {
    path: READY_T0_USE_ROUTES.READY_T0_USE_FORM,
    component: <ReadyToUseForm />,
  },
  {
    path: READY_T0_USE_ROUTES.READY_T0_USE_TABLE,
    component: <ReadyToUseTable />,
  },

  // ----------------------------- // Other Routes // ----------------------------- //
  { path: OTHER_PAGES_ROUTES.BLANK_PAGE, component: <Blank /> },
  { path: OTHER_PAGES_ROUTES.SITEMAP_PAGE, component: <Sitemap /> },
  {
    path: OTHER_PAGES_ROUTES.PRIVACY_POLICY_PAGE,
    component: <PrivacyPolicy />,
  },
  {
    path: OTHER_PAGES_ROUTES.TERMS_CONDITION_PAGE,
    component: <TermsCondition />,
  },
  //----------------------------------// my //---------------------------//

    { path: MY_PAGES_ROUTES.TEST_PAGE, component: <Tanvir /> },
        { path: MY_PAGES_ROUTES.MENU, component: <Menu /> },
                { path: MY_PAGES_ROUTES.ROLE, component: <Role /> },




    { path: SMART_CLASS_ROUTINE_ROUTES.CLASS_ROUTINE, component: <Course /> },
    { path: SMART_CLASS_ROUTINE_ROUTES.COURSE, component: <Course /> },
    { path: SMART_CLASS_ROUTINE_ROUTES.DEPARTMENT, component: <Department /> },

    
];

const authRoutes = [
  // ----------------------------- //  Auth Routes // ----------------------------- //

  { path: AUTH_PAGES_ROUTES.SIGN_UP_PAGE, component: <SignUp /> },
  { path: AUTH_PAGES_ROUTES.SIGN_UP_BG_IMG_PAGE, component: <SignBgImg /> },
  { path: AUTH_PAGES_ROUTES.SIGN_IN_PAGE, component: <SignIn /> },
  { path: AUTH_PAGES_ROUTES.SIGN_IN_BG_IMG_PAGE, component: <SignInBgImg /> },
  { path: AUTH_PAGES_ROUTES.PASSWORD_RESET_PAGE, component: <PasswordReset /> },
  {
    path: AUTH_PAGES_ROUTES.PASSWORD_RESET_IMG_PAGE,
    component: <PasswordResetImg />,
  },
  {
    path: AUTH_PAGES_ROUTES.PASSWORD_CREATE_PAGE,
    component: <PasswordCreate />,
  },
  {
    path: AUTH_PAGES_ROUTES.PASSWORD_CREATE_IMG_PAGE,
    component: <PasswordCreateImg />,
  },
  { path: AUTH_PAGES_ROUTES.LOCK_SCREEN_PAGE, component: <LockScreen /> },
  {
    path: AUTH_PAGES_ROUTES.LOCK_SCREEN_IMG_PAGE,
    component: <LockScreenImg />,
  },
  {
    path: AUTH_PAGES_ROUTES.TWO_STEP_VERIFICATION_PAGE,
    component: <TwoStepVerification />,
  },
  {
    path: AUTH_PAGES_ROUTES.TWO_STEP_VERIFICATION_IMG_PAGE,
    component: <TwoStepVerificationImg />,
  },

  // ----------------------------- // Error Routes // ----------------------------- //

  { path: ERROR_PAGES_ROUTES.BAD_REQUEST_PAGE, component: <BadRequest /> },
  { path: ERROR_PAGES_ROUTES.FORBIDDEN_PAGE, component: <Forbidden /> },
  { path: ERROR_PAGES_ROUTES.NOT_FOUND_PAGE, component: <NotFound /> },
  {
    path: ERROR_PAGES_ROUTES.INTERNAL_SERVER_PAGE,
    component: <InternalServer />,
  },
  {
    path: ERROR_PAGES_ROUTES.SERVICE_UNAVAILABLE_PAGE,
    component: <ServiceUnavailable />,
  },

  // ----------------------------- // Other Routes // ----------------------------- //

  { path: OTHER_PAGES_ROUTES.MAINTENANCE_PAGE, component: <Maintenance /> },
  { path: OTHER_PAGES_ROUTES.LANDING_PAGE, component: <Landing /> },
  { path: OTHER_PAGES_ROUTES.COMING_SOON_PAGE, component: <ComingSoon /> },

  

];

const AppRoutes: React.FC = () => {

  console.log(routes);
  
  return (
    <Routes>
  {routes?.map(({ path, component }) => (
  path ? (
    <Route
      key={path}
      path={path}
      element={<MainLayout>{component ?? <Demo />}</MainLayout>}
    />
  ) : null
))}

{/* Catch-all fallback */}
<Route
  path="*"
  element={<MainLayout><Demo /></MainLayout>}
/>
      {authRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
