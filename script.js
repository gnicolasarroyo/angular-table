(function(angular) {
  'use strict';
  
  var module;
  
  module = angular.module('App', []);
  
  /** -------------------------- CONTROLLER ----------------------------*/
  
  function Controller () {
    this.collection = [
      { "task": "Task 1", "status": "completed"},
      { "task": "Task 2", "status": "pending"},
      { "task": "Task 3", "status": "pending"},
    ];
    
    this.columnsHead = ["Task", "Status"];
  
    this.columnsBody = ["task", "status"];
  }
  
  Controller.prototype.addTask = function () {
    this.collection.push({ "task": "Task 33", "status": "completed"});
  };
  
  module.controller('Controller', Controller);
  
  /** -------------------------- DI.TABLE.HEAD.ROW --------------------*/
  
  function diTableHeadRowCell () {
    return {
      "restrict": "E",
      "scope": {
        "column": "=column"
      },
      "templateUrl": "di.table.head.row.cell.html"
    };
  }
  
  module.directive("diTableHeadRowCell", diTableHeadRowCell);
  
  /** -------------------------- DI.TABLE.HEAD.ROW --------------------*/
  
  function diTableHeadRow () {
    return {
      "restrict": "E",
      "scope": {
        "columns": "=columns"
      },
      "templateUrl": "di.table.head.row.html"
    };
  }
  
  module.directive("diTableHeadRow", diTableHeadRow);
  
  /** -------------------------- DI.TABLE.HEAD -------------------------*/
  
  function diTableHead () {
    return {
      "restrict": "E",
      "scope": {
        "columns": "=columns"
      },
      "templateUrl": "di.table.head.html"
    };
  }
  
  module.directive("diTableHead", diTableHead);
  
  /** -------------------------- DI.TABLE.HEAD.ROW --------------------*/
  
  function diTableBodyRowCell () {
    return {
      "restrict": "E",
      "scope": {
        "column": "=column"
      },
      "templateUrl": "di.table.body.row.cell.html"
    };
  }
  
  module.directive("diTableBodyRowCell", diTableBodyRowCell);

   /** -------------------------- DI.TABLE.BODY.ROW ----------------------*/
  
  function diTableBodyRow () {
    return {
      "restrict": "E",
      "scope": {
        "columns": "=columns",
        "item": "=item"
      },
      "templateUrl": "di.table.body.row.html"
    };
  }
  
  module.directive("diTableBodyRow", diTableBodyRow);
  
   /** -------------------------- DI.TABLE.BODY -------------------------*/
  
  function diTableBody () {
    return {
      "restrict": "E",
      "scope": {
        "columns": "=columns",
        "source": "=source"
      },
      "templateUrl": "di.table.body.html"
    };
  }
  
  module.directive("diTableBody", diTableBody);
  
  /** -------------------------- DI.TABLE ------------------------------*/
  
  function diTable () {
    return {
     "restrict": "E",
      "scope": {
        "columnsHead": "=columnsHead",
        "columnsBody": "=columnsBody",
        "source": "=source"
      },
      "templateUrl": "di.table.html"
    };
  }
  
  module.directive("diTable", diTable);
  
})(window.angular);