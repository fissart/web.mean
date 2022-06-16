import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { KatexModule } from 'ng-katex';
//import { MarkdownModule } from 'ngx-markdown';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoFormComponent } from './components/asignature-form/asignature-form.component';
import { PhotoPreviewComponent } from './components/curse-preview/curse-preview.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { LandComponent } from "./components/landscape/land.component";


import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsignatureComponent } from './components/asignature/asignature.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TasksComponent } from './components/tasks/tasks.component';
import { SwiperModule } from 'swiper/angular';
//import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
//import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgxHeadroomModule } from 'ngx-headroom';
import {MatIconModule} from '@angular/material/icon';
import { UnityPreviewComponent } from './components/unity-preview/unity-preview.component';
import { ThemePreviewComponent } from './components/theme-preview/theme-preview.component';
import { ThemesComponent } from './components/themes/themes.component';
import { NgxDocViewerModule } from "ngx-doc-viewer";
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TaskPreviewComponent } from './components/task-preview/task-preview.component';
import { UsersCurseComponent } from './components/integer/integer.component';
import { FileComponent } from './components/file/file.component';
import { OtrosComponent } from './components/otros/otros.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ConsejoestudiantilComponent } from './components/consejoestudiantil/consejoestudiantil.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { TesisComponent } from './components/tesis/tesis.component';
import { EventosacademicosComponent } from './components/eventosacademicos/eventosacademicos.component';
import { NosostrosComponent } from './components/nosostros/nosostros.component';
import { DocumentosinstitucionalesComponent } from './components/documentosinstitucionales/documentosinstitucionales.component';
import { Component1wwwComponent } from './components/component1www/component1www.component';
import { Component2wwwComponent } from './components/component2www/component2www.component';
import { Component2WwwComponent } from './components/component2-www/component2-www.component';
import { Component1RHComponent } from './components/component1-rh/component1-rh.component';
import { Component2LPAUTORIDADESComponent } from './components/component2-lp-autoridades/component2-lp-autoridades.component';
import { Component1MVComponent } from './components/component1-mv/component1-mv.component';
import { Component2RHComponent } from './components/component2-rh/component2-rh.component';
import { Component3LAUTORIDADESComponent } from './components/component3-l-autoridades/component3-l-autoridades.component';
import { Component4LADMINISTRATIVOSComponent } from './components/component4-l-administrativos/component4-l-administrativos.component';
import { Component5LCONSEJOESTUDIANTILComponent } from './components/component5-l-consejoestudiantil/component5-l-consejoestudiantil.component';
import { Component6EDUCACIONComponent } from './components/component6-educacion/component6-educacion.component';
import { Component7APPComponent } from './components/component7-ap-p/component7-ap-p.component';
import { Component8APGComponent } from './components/component8-ap-g/component8-ap-g.component';
import { Component9APEComponent } from './components/component9-ap-e/component9-ap-e.component';
import { Component10TESISComponent } from './components/component10-tesis/component10-tesis.component';
import { Component12BIBLIOTECAComponent } from './components/component12-biblioteca/component12-biblioteca.component';
import { Component13ADMISIONComponent } from './components/component13-admision/component13-admision.component';
import { Component14PREComponent } from './components/component14-pre/component14-pre.component';
import { Component15STDComponent } from './components/component15-std/component15-std.component';
import { Component16EGRESADOSComponent } from './components/component16-egresados/component16-egresados.component';
import { Component17EVENTOSComponent } from './components/component17-eventos/component17-eventos.component';
import { Component18DOCUMENTOSComponent } from './components/component18-documentos/component18-documentos.component';
import { Component19ORGANIGRAMAComponent } from './components/component19-organigrama/component19-organigrama.component';
import { Component20CRONOGRAMAComponent } from './components/component20-cronograma/component20-cronograma.component';
import { Component21RECLAMOSComponent } from './components/component21-reclamos/component21-reclamos.component';
import { Component22PREGUNTASComponent } from './components/component22-preguntas/component22-preguntas.component';
import { Component23MESADEPARTESComponent } from './components/component23-mesadepartes/component23-mesadepartes.component';
import { Component24HORARYComponent } from './components/component24-horary/component24-horary.component';
import { Component25SILABOSComponent } from './components/component25-silabos/component25-silabos.component';
import { Component26NOTASComponent } from './components/component26-notas/component26-notas.component';
import { Svc1MVComponent } from './services/svc1-mv/svc1-mv.component';
import { Svc2RHComponent } from './services/svc2-rh/svc2-rh.component';
import { Svc3AUTORIDADESComponent } from './services/svc3-autoridades/svc3-autoridades.component';
import { Svc4ADMINISTRATIVOSComponent } from './services/svc4-administrativos/svc4-administrativos.component';
import { Svc5CONSEJOESTUDIANTILComponent } from './services/svc5-consejoestudiantil/svc5-consejoestudiantil.component';
import { Svc6EDUCACIONComponent } from './services/svc6-educacion/svc6-educacion.component';
import { Svc7APPComponent } from './services/svc7-ap-p/svc7-ap-p.component';
import { Svc8APGComponent } from './services/svc8-ap-g/svc8-ap-g.component';
import { Svc9APEComponent } from './services/svc9-ap-e/svc9-ap-e.component';
import { Svc10TESISComponent } from './services/svc10-tesis/svc10-tesis.component';
import { Svc12BIBLIOTECAComponent } from './services/svc12-biblioteca/svc12-biblioteca.component';
import { Svc13ADMISIONComponent } from './services/svc13-admision/svc13-admision.component';
import { Svc14PREComponent } from './services/svc14-pre/svc14-pre.component';
import { Svc15STDComponent } from './services/svc15-std/svc15-std.component';
import { Svc16EGRESADOSComponent } from './services/svc16-egresados/svc16-egresados.component';
import { Svc17EVENTOSComponent } from './services/svc17-eventos/svc17-eventos.component';
import { Svc18DOCUMENTOSComponent } from './services/svc18-documentos/svc18-documentos.component';
import { Svc19ORGANIGRAMAComponent } from './services/svc19-organigrama/svc19-organigrama.component';
import { Svc20CRONOGRAMAComponent } from './services/svc20-cronograma/svc20-cronograma.component';
import { Svc21RECLAMOSComponent } from './services/svc21-reclamos/svc21-reclamos.component';
import { Svc22PREGUNTASComponent } from './services/svc22-preguntas/svc22-preguntas.component';
import { Svc23MESADEPARTESComponent } from './services/svc23-mesadepartes/svc23-mesadepartes.component';
import { Svc24HORARYComponent } from './services/svc24-horary/svc24-horary.component';
import { Svc25SILABOSComponent } from './services/svc25-silabos/svc25-silabos.component';
//import { NgxMarkdownItModule } from "ngx-markdown-it";
//import { NgxMarkdownItConfig } from "ngx-markdown-it";

//import { default as markmapPlugin } from 'markdown-it-markmap';
@NgModule({
	declarations: [
		AppComponent,
        ThemesComponent,
		NavigationComponent,
		PhotosListComponent,
		LandComponent,
		LoginComponent,
		UserComponent,
		PhotoFormComponent,
		PhotoPreviewComponent,
		UserPreviewComponent,
		AsignatureComponent,
		TasksComponent,
  UnityPreviewComponent,
  ThemePreviewComponent,
  TaskPreviewComponent,
  UsersCurseComponent,
  FileComponent,
  OtrosComponent,
  MultimediaComponent,
  GaleriaComponent,
  ConsejoestudiantilComponent,
  CarrerasComponent,
  BibliotecaComponent,
  TesisComponent,
  EventosacademicosComponent,
  NosostrosComponent,
  DocumentosinstitucionalesComponent,
  Component1wwwComponent,
  Component2wwwComponent,
  Component2WwwComponent,
  Component1RHComponent,
  Component2LPAUTORIDADESComponent,
  Component1MVComponent,
  Component2RHComponent,
  Component3LAUTORIDADESComponent,
  Component4LADMINISTRATIVOSComponent,
  Component5LCONSEJOESTUDIANTILComponent,
  Component6EDUCACIONComponent,
  Component7APPComponent,
  Component8APGComponent,
  Component9APEComponent,
  Component10TESISComponent,
  Component12BIBLIOTECAComponent,
  Component13ADMISIONComponent,
  Component14PREComponent,
  Component15STDComponent,
  Component16EGRESADOSComponent,
  Component17EVENTOSComponent,
  Component18DOCUMENTOSComponent,
  Component19ORGANIGRAMAComponent,
  Component20CRONOGRAMAComponent,
  Component21RECLAMOSComponent,
  Component22PREGUNTASComponent,
  Component23MESADEPARTESComponent,
  Component24HORARYComponent,
  Component25SILABOSComponent,
  Component26NOTASComponent,
  Svc1MVComponent,
  Svc2RHComponent,
  Svc3AUTORIDADESComponent,
  Svc4ADMINISTRATIVOSComponent,
  Svc5CONSEJOESTUDIANTILComponent,
  Svc6EDUCACIONComponent,
  Svc7APPComponent,
  Svc8APGComponent,
  Svc9APEComponent,
  Svc10TESISComponent,
  Svc12BIBLIOTECAComponent,
  Svc13ADMISIONComponent,
  Svc14PREComponent,
  Svc15STDComponent,
  Svc16EGRESADOSComponent,
  Svc17EVENTOSComponent,
  Svc18DOCUMENTOSComponent,
  Svc19ORGANIGRAMAComponent,
  Svc20CRONOGRAMAComponent,
  Svc21RECLAMOSComponent,
  Svc22PREGUNTASComponent,
  Svc23MESADEPARTESComponent,
  Svc24HORARYComponent,
  Svc25SILABOSComponent,
	],
	imports: [
		BrowserModule,
		NgxDocViewerModule,
		FormsModule,
		AppRoutingModule,
		CommonModule,
		DragDropModule,
		NgbModule,
		KatexModule,
        SwiperModule,
        //NgxHideOnScrollModule,
		HttpClientModule,
        MatIconModule,
        //YouTubePlayerModule,
        NgxHeadroomModule,
		//MarkdownModule.forRoot(),
		//NgxMarkdownItModule.forRoot(
			//{
		 //plugins: [
		//	 markmapPlugin
		 //]
	 //}
 //),
		MatProgressBarModule,
		BrowserAnimationsModule,
        NgxExtendedPdfViewerModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
