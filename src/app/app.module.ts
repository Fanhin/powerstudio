import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { GMapModule } from 'primeng/gmap';


import { AppCodeModule } from './app.code.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from './app.config.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
// import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
// import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
// import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
// import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
// import { InputDemoComponent } from './demo/view/inputdemo.component';
// import { ButtonDemoComponent } from './demo/view/buttondemo.component';
// import { TableDemoComponent } from './demo/view/tabledemo.component';
// import { ListDemoComponent } from './demo/view/listdemo.component';
// import { TreeDemoComponent } from './demo/view/treedemo.component';
// import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
// import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
// import { MediaDemoComponent } from './demo/view/mediademo.component';
// import { MenusDemoComponent } from './demo/view/menusdemo.component';
// import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
// import { MiscDemoComponent } from './demo/view/miscdemo.component';
// import { EmptyDemoComponent } from './demo/view/emptydemo.component';
// import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
// import { FileDemoComponent } from './demo/view/filedemo.component';
// import { DocumentationComponent } from './demo/view/documentation.component';
// import { DisplayComponent } from './utilities/display.component';
// import { ElevationComponent } from './utilities/elevation.component';
// import { FlexboxComponent } from './utilities/flexbox.component';
// import { GridComponent } from './utilities/grid.component';
// import { IconsComponent } from './utilities/icons.component';
// import { WidgetsComponent } from './utilities/widgets.component';
// import { SpacingComponent } from './utilities/spacing.component';
// import { TypographyComponent } from './utilities/typography.component';
// import { TextComponent } from './utilities/text.component';
// import { AppCrudComponent } from './pages/app.crud.component';
// import { AppCalendarComponent } from './pages/app.calendar.component';
// import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';
// import { AppInvoiceComponent } from './pages/app.invoice.component';
// import { AppHelpComponent } from './pages/app.help.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';

import { CountryService } from './demo/service/countryservice';
import { CustomerService } from './demo/service/customerservice';
import { EventService } from './demo/service/eventservice';
import { IconService } from './demo/service/iconservice';
import { NodeService } from './demo/service/nodeservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';

import { MenuService } from './app.menu.service';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { DashboardComponent } from './cocoa/dashboard/dashboard.component';
import { TemperatureComponent } from './cocoa/temperature/temperature.component';
import { HumidityComponent } from './cocoa/humidity/humidity.component';
import { Co2Component } from './cocoa/co2/co2.component';
import { CountComponent } from './cocoa/count/count.component';
import { HumidityChartSensorComponent } from './cocoa/humidity/humidity-chart-sensor.component';
import { TempChartSensorComponent } from './cocoa/temperature/temp-chart-sensor.component';
import { Co2ChartSensorComponent } from './cocoa/co2/co2-chart-sensor.component';
import { TempMiniChartSensorComponent } from './cocoa/temperature/temp-mini-chart-sensor.component';
import { HumidityMiniChartSensorComponent } from './cocoa/humidity/humidity-mini-chart-sensor.component';
import { Co2MiniChartSensorComponent } from './cocoa/co2/co2-mini-chart-sensor.component';

import { WalkDetectedChartComponent } from './cocoa/count/walk-detected-chart.component';
import { VisitorInoutChartComponent } from './cocoa/count/visitor-inout-chart.component';
import { VisitorInChartComponent } from './cocoa/count/visitor-in-chart.component';
import { WalkDetectedCompareZoneChartComponent } from './cocoa/count/walk-detected-compare-zone-chart.component';
import { TempChartHistorySensorComponent } from './cocoa/temperature/temp-chart-history-sensor.component';
import { TempChartCurrentSensorComponent } from './cocoa/temperature/temp-chart-current-sensor.component';
import { MockupMiniChartComponent } from './cocoa/dashboard/mockup-mini-chart.component';

import { OverviewComponent } from './powerstudio/overview/overview.component';
import { MdbComponent } from './powerstudio/mdb/mdb.component';
import { ReportComponent } from './powerstudio/report/report.component';
import { ContactComponent } from './powerstudio/contact/contact.component';
import { NotificationComponent } from './powerstudio/notification/notification.component';
import { DeviceComponent } from './powerstudio/device/device.component';
import { EnergyComponent } from './powerstudio/energy/energy.component';
import { DeviceOverviewComponent } from './powerstudio/device/device-overview.component';
import { DeviceTableComponent } from './powerstudio/device/device-table.component';
import { DeviceChartComponent } from './powerstudio/device/device-chart.component';
import { EnergyChartComponent } from './powerstudio/energy/energy-chart.component';
import { PowerComponent } from './powerstudio/power/power.component';
import { TestComponent } from './powerstudio/test/test.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarGroupModule,
        AvatarModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,
        GMapModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppRightPanelComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppFooterComponent,
        // DashboardDemoComponent,
        // FormLayoutDemoComponent,
        // FloatLabelDemoComponent,
        // InvalidStateDemoComponent,
        // InputDemoComponent,
        // ButtonDemoComponent,
        // TableDemoComponent,
        // ListDemoComponent,
        // TreeDemoComponent,
        // PanelsDemoComponent,
        // OverlaysDemoComponent,
        // MediaDemoComponent,
        // MenusDemoComponent,
        // MessagesDemoComponent,
        // MiscDemoComponent,
        // ChartsDemoComponent,
        // EmptyDemoComponent,
        // FileDemoComponent,
        // DocumentationComponent,
        // DisplayComponent,
        // ElevationComponent,
        // FlexboxComponent,
        // GridComponent,
        // IconsComponent,
        // WidgetsComponent,
        // SpacingComponent,
        // TypographyComponent,
        // TextComponent,
        // AppCrudComponent,
        // AppCalendarComponent,
        // AppTimelineDemoComponent,
        AppLoginComponent,
        // AppInvoiceComponent,
        // AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        DashboardComponent,
        TemperatureComponent,
        HumidityComponent,
        Co2Component,
        CountComponent,
        HumidityChartSensorComponent,
        TempChartSensorComponent,
        Co2ChartSensorComponent,
        TempMiniChartSensorComponent,
        HumidityMiniChartSensorComponent,
        Co2MiniChartSensorComponent,
        WalkDetectedChartComponent,
        VisitorInoutChartComponent,
        VisitorInChartComponent,
        WalkDetectedCompareZoneChartComponent,
        TempChartHistorySensorComponent,
        TempChartCurrentSensorComponent,
        MockupMiniChartComponent,
        OverviewComponent,
        MdbComponent,
        ReportComponent,
        ContactComponent,
        NotificationComponent,
        DeviceComponent,
        EnergyComponent,
        DeviceOverviewComponent,
        DeviceTableComponent,
        DeviceChartComponent,
        EnergyChartComponent,
        PowerComponent,
        TestComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, AppBreadcrumbService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
