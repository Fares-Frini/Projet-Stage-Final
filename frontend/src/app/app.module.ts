import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BookManagementComponent } from './book-management/book-management.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './main-page/header/header.component';
import { MainBodyComponent } from './main-page/main-body/main-body.component';
import { CatalogueComponent } from './main-page/catalogue/catalogue.component';
import { BooksHeaderComponent } from './main-page/books-header/books-header.component';
import { BooksFiltersComponent } from './main-page/books-filters/books-filters.component';
import { ProductBoxComponent } from './main-page/product-box/product-box.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartService } from './services/cart-service/cart.service';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { HomeComponent } from './home-page/home/home.component';
import { BestSellerComponent } from './home-page/best-seller/best-seller.component';
import { ProductBoxSlideComponent } from './home-page/product-box-slide/product-box-slide.component';
import { PromotionComponent } from './home-page/promotion/promotion.component';
import { AuthComponent } from './auth-page/auth/auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { AddContentDialog ,editUserDialog} from './user-management/user-management.component';
import {MatRadioModule} from '@angular/material/radio';
import { AddBookDialog } from './book-management/book-management.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { editBookDialog ,editImageDialog} from './book-management/book-management.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StoreService } from './services/store/store.service';

   @NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    UserManagementComponent,
    BookManagementComponent,
    HeaderComponent,
    MainBodyComponent,
    CatalogueComponent,
    BooksHeaderComponent,
    BooksFiltersComponent,
    ProductBoxComponent,
    CartPageComponent,
    CarouselComponent,
    HomeComponent,
    BestSellerComponent,
    ProductBoxSlideComponent,
    PromotionComponent,
    AuthComponent,
    AddContentDialog,
    AddBookDialog,
    editBookDialog,
    editImageDialog,
    editUserDialog
    ],
  imports: [
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[HeaderComponent],
  providers: [CartService,StoreService],
  bootstrap: [AppComponent]
})  
export class AppModule { }
