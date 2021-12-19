import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
// import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
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
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
// import { InputDemoComponent } from './demo/view/inputdemo.component';
// import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
// import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
// import { ButtonDemoComponent } from './demo/view/buttondemo.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';
// import { ListDemoComponent } from './demo/view/listdemo.component';
// import { TreeDemoComponent } from './demo/view/treedemo.component';
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

//COCOA Site
import { DashboardComponent } from './cocoa/dashboard/dashboard.component';
import { TemperatureComponent } from './cocoa/temperature/temperature.component';
import { HumidityComponent } from './cocoa/humidity/humidity.component';
import { Co2Component } from './cocoa/co2/co2.component';
import { CountComponent } from './cocoa/count/count.component';


// POWERSTUDIO Site
import { OverviewComponent } from './powerstudio/overview/overview.component';
import { MdbComponent } from './powerstudio/mdb/mdb.component';
import { ContactComponent } from './powerstudio/contact/contact.component';
import { NotificationComponent } from './powerstudio/notification/notification.component';
import { DeviceComponent } from './powerstudio/device/device.component';
import { EnergyComponent } from './powerstudio/energy/energy.component';
import { ReportComponent } from './powerstudio/report/report.component';
import { PowerComponent } from './powerstudio/power/power.component';
import { TestComponent } from './powerstudio/test/test.component';
import { SlideshowComponent } from './powerstudio/slideshow/slideshow.component';
import { Mdb1Component } from './powerstudio/mdb1/mdb1.component';
import { Mdb2Component } from './powerstudio/mdb2/mdb2.component';
import { Mdb3Component } from './powerstudio/mdb3/mdb3.component';
import { Mdb5Component } from './powerstudio/mdb5/mdb5.component';
import { Mdb4Component } from './powerstudio/mdb4/mdb4.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    // { path: '', component: DashboardDemoComponent },
                    // { path: 'uikit/formlayout', component: FormLayoutDemoComponent },
                    // { path: 'uikit/floatlabel', component: FloatLabelDemoComponent },
                    // { path: 'uikit/invalidstate', component: InvalidStateDemoComponent },
                    // { path: 'uikit/input', component: InputDemoComponent },
                    // { path: 'uikit/button', component: ButtonDemoComponent },
                    { path: 'uikit/table', component: TableDemoComponent },
                    // { path: 'uikit/list', component: ListDemoComponent },
                    // { path: 'uikit/tree', component: TreeDemoComponent },
                    // { path: 'uikit/panel', component: PanelsDemoComponent },
                    // { path: 'uikit/overlay', component: OverlaysDemoComponent },
                    // { path: 'uikit/menu', component: MenusDemoComponent },
                    // { path: 'uikit/media', component: MediaDemoComponent },
                    // { path: 'uikit/message', component: MessagesDemoComponent },
                    // { path: 'uikit/misc', component: MiscDemoComponent },
                    // { path: 'uikit/charts', component: ChartsDemoComponent },
                    // { path: 'uikit/file', component: FileDemoComponent },
                    // { path: 'utilities/display', component: DisplayComponent },
                    // { path: 'utilities/elevation', component: ElevationComponent },
                    // { path: 'utilities/flexbox', component: FlexboxComponent },
                    // { path: 'utilities/grid', component: GridComponent },
                    // { path: 'utilities/icons', component: IconsComponent },
                    // { path: 'utilities/widgets', component: WidgetsComponent },
                    // { path: 'utilities/spacing', component: SpacingComponent },
                    // { path: 'utilities/typography', component: TypographyComponent },
                    // { path: 'utilities/text', component: TextComponent },
                    // { path: 'pages/crud', component: AppCrudComponent },
                    // { path: 'pages/calendar', component: AppCalendarComponent },
                    // { path: 'pages/timeline', component: AppTimelineDemoComponent },
                    // { path: 'pages/invoice', component: AppInvoiceComponent },
                    // { path: 'pages/help', component: AppHelpComponent },
                    // { path: 'pages/empty', component: EmptyDemoComponent },
                    // { path: 'documentation', component: DocumentationComponent },

                    // COCOA Site
                    // { path: '', component: DashboardComponent },
                    { path: 'temperature', component: TemperatureComponent },
                    // { path: 'humidity', component: HumidityComponent },
                    // { path: 'co2', component: Co2Component },
                    // { path: 'count', component: CountComponent },

                    //PowerStudio Site
                    { path: '', component: OverviewComponent },
                    { path: 'notification', component: NotificationComponent },
                    { path: 'device', component: DeviceComponent },
                    { path: 'energy', component: EnergyComponent },
                    { path: "power", component: PowerComponent },
                    { path: 'MDB', component: MdbComponent },
                    { path: 'MDB1', component: Mdb1Component },
                    { path: 'MDB2', component: Mdb2Component },
                    { path: 'MDB3', component: Mdb3Component },
                    { path: 'MDB4', component: Mdb4Component },
                    { path: 'MDB5', component: Mdb5Component },
                    { path: 'test', component: TestComponent },
                    { path: 'slideshow', component: SlideshowComponent },




                    { path: 'contact', component: ContactComponent },
                    { path: 'report', component: ReportComponent },
                ]
            },
            { path: 'error', component: AppErrorComponent },
            { path: 'access', component: AppAccessdeniedComponent },
            { path: 'notfound', component: AppNotfoundComponent },
            { path: 'login', component: AppLoginComponent },
            
            { path: '**', redirectTo: '/notfound' },
            
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
