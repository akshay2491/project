//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: 'templates/add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'AddOrderController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);

sampleApp.service("simpleFact",function()
{
 
  var uid=1;
  var customers=[{id:0,
                  name:'akshay',
                  city:'panvel'}];

		 this.list=function()
		 {
		   return customers;
		 }
		this.save=function(cust)
		{
		  if(customers.id==cust.id)
			  {
			    cust.id=uid++;
			    customers.push(cust);
			  }
			  else
			  {
			    for(i in customers)
			    {
			      if(customers[i].id==cust.id)
			      {
			        customers[i]=cust;
			      }
			    }
			  }
		}
		
		
			
				this.delete=function(id)
			{ for(i in customers)
			  if(customers[i].id==id)
			  {
			    customers.splice(i,1);
			  }
			  
			}
			
  
  
})
sampleApp.controller('AddOrderController', function($scope,simpleFact) {
	
  $scope.customers=simpleFact.list();
/*  $scope.delete=function(id)
  {
    simpleFact.delete(id);
    
  };*/
  $scope.addCust=function()
  {
    simpleFact.save($scope.newCustomer);
    $scope.newCustomer = {};
    
  }
	/*$scope.addCust=function()
			{ 
			  $scope.customers.push({name:$scope.newCustomer.name,
			  city:$scope.newCustomer.city});
			}
	*/		$scope.delete=function(id)
			{
			  simpleFact.delete(id);
			}
		}
	
);


