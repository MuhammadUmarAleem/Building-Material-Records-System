var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/Signup');
var loginRouter = require('./routes/Login');
var createcompanyRouter = require('./routes/CreateCompany');
var GetDealerProfileRouter = require('./routes/GetDealerProfile');
var UpdateDealerProfileRouter = require('./routes/UpdateDealerProfile');
var GetMaxIdUserRouter = require('./routes/GetMaxIdUser');
var GetMaxIdAddressRouter = require('./routes/GetMaxIdAddress');
var GetCompanyTypeIdRouter = require('./routes/GetCompanyTypeId');
var UpdateDealerAddressRouter = require('./routes/UpdateDealerAddress');
var UpdateDealerAccountRouter = require('./routes/UpdateDealerAccount');
var GetCompanyProfileRouter = require('./routes/GetCompanyProfile');
var UpdateCompanyAddressRouter = require('./routes/UpdateCompanyAddress');
var UpdateCompanyAccountRouter = require('./routes/UpdateCompanyAccount');
var UpdateCompanyProfileRouter = require('./routes/UpdateCompanyProfile');
var CompanyAddProductsRouter = require('./routes/CompanyAddProducts');
var GetProductCompanyRouter = require('./routes/GetProductCompany');
var CompanyActiveorInActiveProductsRouter = require('./routes/CompanyActiveorInActiveProducts');
var GetProductusingIdRouter = require('./routes/GetProductusingId');
var CompanyUpdateProductRouter = require('./routes/CompanyUpdateProduct');
var CompanyAddStockRouter = require('./routes/CompanyAddStock');
var GetThresholdCompanyRouter = require('./routes/GetThresholdCompany');
var CompanyAddStockInThresholdRouter = require('./routes/CompanyAddStockInThreshold');
var DeleteUserRouter = require('./routes/DeleteUser');
var GetCompanyTypeRouter = require('./routes/GetCompanyType');
var GetProductsForDealerRouter = require('./routes/GetProductsForDealer');
var GetProductusingIdDealerRouter = require('./routes/GetProductusingIdDealer');
var DealerAddToCartRouter = require('./routes/DealerAddToCart');
var GetDealerCartRouter = require('./routes/GetDealerCart');
var RemoveDealerCartProductRouter = require('./routes/RemoveDealerCartProduct');
var DealersOrderRouter = require('./routes/DealersOrder');
var GetOrderofUserIdRouter = require('./routes/GetOrderofUserId');
var CompanyReviewsAndRatingRouter = require('./routes/CompanyReviewsAndRating');
var GetCompanyRatingRouter = require('./routes/GetCompanyRating');
var GetCompanyReviewsRouter = require('./routes/GetCompanyReviews');
var GetDealerStockRouter = require('./routes/GetDealerStock');
var DealerActiveorInActiveStockRouter = require('./routes/DealerActiveorInActiveStock');
var GetProductForDealerStockRouter = require('./routes/GetProductForDealerStock');
var UpdateDealerThresholdRouter = require('./routes/UpdateDealerThreshold');
var UpdateDealerStockPriceRouter = require('./routes/UpdateDealerStockPrice');
var GetDealerThresholdRouter = require('./routes/GetDealerThreshold');
var GetProductsForCustomerRouter = require('./routes/GetProductsForCustomer');
var GetDealerInfoForCustomerRouter = require('./routes/GetDealerInfoForCustomer');
var CustomerAddToCartRouter = require('./routes/CustomerAddToCart');
var GetCustomerCartRouter = require('./routes/GetCustomerCart');
var RemoveCustomerCartProductRouter = require('./routes/RemoveCustomerCartProduct');
var UpdateDealerAddressDuringPaymentRouter = require('./routes/UpdateDealerAddressDuringPayment');
var UpdateDealerCartDuringPaymentCartRouter = require('./routes/UpdateDealerCartDuringPaymentCart');
var DealerOrderFromCartRouter = require('./routes/DealerOrderFromCart');
var CustomerOrderRouter = require('./routes/CustomerOrder');
var GetOrderofUserIdCustomerRouter = require('./routes/GetOrderofUserIdCustomer');
var DealerReviewAndRatingRouter = require('./routes/DealerReviewAndRating');
var GetProductRatingRouter = require('./routes/GetProductRating');
var GetDealerRatingRouter = require('./routes/GetDealerRating');
var GetProductReviewsRouter = require('./routes/GetProductReviews');
var GetUserNameRouter = require('./routes/GetUserName');
var CustomerOrderInCartRouter = require('./routes/CustomerOrderInCart');
var GetProductRatingInDealerRouter = require('./routes/GetProductRatingInDealer');
var GetProductReviewsInDealerRouter = require('./routes/GetProductReviewsInDealer');
var GetDealerRatingUsingUserIdRouter = require('./routes/GetDealerRatingUsingUserId');
var MonthlyProductWiseSaleCompanyReportRouter = require('./routes/MonthlyProductWiseSaleCompanyReport');
var MonthlyProductWisePercentCompanyReportRouter = require('./routes/MonthlyProductWisePercentCompanyReport');
var MonthlyProductWiseSaleDealerReportRouter = require('./routes/MonthlyProductWiseSaleDealerReport');
var MonthlyProductWisePercentDealerReportRouter = require('./routes/MonthlyProductWisePercentDealerReport');
// var CustomerOrderReportRouter = require('./routes/CustomerOrderReport');
// var DealerOrderReportRouter = require('./routes/DealerOrderReport');
var MonthlyProductWiseProfitDealerRouter = require('./routes/MonthlyProductWiseProfitDealerReport');
var CustomerPurchaseReportRouter = require('./routes/CustomerPurchaseReport');
var DealerPurchaseReportRouter = require('./routes/DealerPurchaseReport');
var MonthlyCategoryWisePercentCompanyReportRouter = require('./routes/MonthlyCategoryWisePercentCompanyReport');
// var uploadReportsRouter = require('./routes/uploadReports');
var CompanyProductRatingReportRouter = require('./routes/CompanyProductRatingReport');
var CompanyProductReviewReportRouter = require('./routes/CompanyProductReviewReport');
var CompanyOrderReportRouter = require('./routes/CompanyOrderReport');
var DealerOrderReportRouter = require('./routes/DealerOrderReport');







var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var app = express();
var cors=require('cors');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Signup',signupRouter)
app.use('/Login',loginRouter)
app.use('/CreateCompany',createcompanyRouter);
app.use('/GetDealerProfile',GetDealerProfileRouter);
app.use('/UpdateDealerProfile',UpdateDealerProfileRouter);
app.use('/GetMaxIdUser',GetMaxIdUserRouter);
app.use('/GetMaxIdAddress',GetMaxIdAddressRouter);
app.use('/GetCompanyTypeId',GetCompanyTypeIdRouter);
app.use('/UpdateDealerAddress',UpdateDealerAddressRouter);
app.use('/UpdateDealerAccount',UpdateDealerAccountRouter);
app.use('/GetCompanyProfile',GetCompanyProfileRouter);
app.use('/UpdateCompanyAddress',UpdateCompanyAddressRouter);
app.use('/UpdateCompanyAccount',UpdateCompanyAccountRouter);
app.use('/UpdateCompanyProfile',UpdateCompanyProfileRouter);
app.use('/CompanyAddProducts',CompanyAddProductsRouter);
app.use('/GetProductCompany',GetProductCompanyRouter);
app.use('/CompanyActiveorInActiveProducts',CompanyActiveorInActiveProductsRouter);
app.use('/GetProductusingId',GetProductusingIdRouter);
app.use('/CompanyUpdateProduct',CompanyUpdateProductRouter);
app.use('/CompanyAddStock',CompanyAddStockRouter);
app.use('/GetThresholdCompany',GetThresholdCompanyRouter);
app.use('/CompanyAddStockInThreshold',CompanyAddStockInThresholdRouter);
app.use('/DeleteUser',DeleteUserRouter);
app.use('/GetCompanyType',GetCompanyTypeRouter);
app.use('/GetProductsForDealer',GetProductsForDealerRouter);
app.use('/GetProductusingIdDealer',GetProductusingIdDealerRouter);
app.use('/DealerAddToCart',DealerAddToCartRouter);
app.use('/GetDealerCart',GetDealerCartRouter);
app.use('/RemoveDealerCartProduct',RemoveDealerCartProductRouter);
app.use('/DealersOrder',DealersOrderRouter);
app.use('/GetOrderofUserId',GetOrderofUserIdRouter);
app.use('/CompanyReviewsAndRating',CompanyReviewsAndRatingRouter);
app.use('/GetCompanyRating',GetCompanyRatingRouter);
app.use('/GetCompanyReviews',GetCompanyReviewsRouter);
app.use('/GetDealerStock',GetDealerStockRouter);
app.use('/DealerActiveorInActiveStock',DealerActiveorInActiveStockRouter);
app.use('/GetProductForDealerStock',GetProductForDealerStockRouter);
app.use('/UpdateDealerThreshold',UpdateDealerThresholdRouter);
app.use('/UpdateDealerStockPrice',UpdateDealerStockPriceRouter);
app.use('/GetDealerThreshold',GetDealerThresholdRouter);
app.use('/GetProductsForCustomer',GetProductsForCustomerRouter);
app.use('/GetDealerInfoForCustomer',GetDealerInfoForCustomerRouter);
app.use('/CustomerAddToCart',CustomerAddToCartRouter);
app.use('/GetCustomerCart',GetCustomerCartRouter);
app.use('/RemoveCustomerCartProduct',RemoveCustomerCartProductRouter);
app.use('/UpdateDealerAddressDuringPayment',UpdateDealerAddressDuringPaymentRouter);
app.use('/UpdateDealerCartDuringPaymentCart',UpdateDealerCartDuringPaymentCartRouter);
app.use('/DealerOrderFromCart',DealerOrderFromCartRouter);
app.use('/CustomerOrder',CustomerOrderRouter);
app.use('/GetOrderofUserIdCustomer',GetOrderofUserIdCustomerRouter);
app.use('/DealerReviewAndRating',DealerReviewAndRatingRouter);
app.use('/GetProductRating',GetProductRatingRouter);
app.use('/GetDealerRating',GetDealerRatingRouter);
app.use('/GetProductReviews',GetProductReviewsRouter);
app.use('/CustomerOrderInCart',CustomerOrderInCartRouter);
app.use('/GetProductRatingInDealer',GetProductRatingInDealerRouter);
app.use('/GetUserName',GetUserNameRouter);
app.use('/GetProductReviewsInDealer',GetProductReviewsInDealerRouter);
app.use('/GetDealerRatingUsingUserId',GetDealerRatingUsingUserIdRouter);
app.use('/MonthlyProductWiseSaleCompanyReport',MonthlyProductWiseSaleCompanyReportRouter);
app.use('/MonthlyProductWisePercentCompanyReport',MonthlyProductWisePercentCompanyReportRouter);
app.use('/MonthlyProductWiseSaleDealerReport',MonthlyProductWiseSaleDealerReportRouter);
app.use('/MonthlyProductWisePercentDealerReport',MonthlyProductWisePercentDealerReportRouter);
// app.use('/CustomerOrderReport',CustomerOrderReportRouter);
// app.use('/DealerOrderReport',DealerOrderReportRouter);
app.use('/MonthlyProductWiseProfitDealer',MonthlyProductWiseProfitDealerRouter);
app.use('/DealerPurchaseReport',DealerPurchaseReportRouter);
app.use('/CustomerPurchaseReport',CustomerPurchaseReportRouter);
app.use('/MonthlyCategoryWisePercentCompanyReport',MonthlyCategoryWisePercentCompanyReportRouter);
// app.use('/uploadReports',uploadReportsRouter);
app.use('/CompanyProductRatingReportRouter',CompanyProductRatingReportRouter);
app.use('/CompanyProductReviewReport',CompanyProductReviewReportRouter);
app.use('/CompanyOrderReport',CompanyOrderReportRouter);
app.use('/DealerOrderReport',DealerOrderReportRouter);










// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;