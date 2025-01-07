/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to Director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Can not work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
};
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ01PLElBQU0sUUFBUTtJQUFHO0lBVXhCLENBQUM7SUFURywrQkFBWSxHQUFaO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNJLE9BQU8sd0JBQXdCLENBQUM7SUFDcEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBRU0sSUFBTSxPQUFPO0lBQUc7SUFVdkIsQ0FBQztJQVRHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsa0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFTSxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQXVCO0lBQ2xELElBQUssT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7SUFDekIsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztBQUNMLENBQUM7QUFFTSxJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQThDO0lBQ3JFLE9BQU8sUUFBUSxZQUFZLFFBQVEsQ0FBQztBQUN4QyxDQUFDO0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUE4QztJQUN0RSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDeEMsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7ICBcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERpcmVjdG9yID0gY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZXtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgICB9XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICAgIH1cbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIERpcmVjdG9yIHRhc2tzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVGVhY2hlciA9IGNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNle1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW4gbm90IHdvcmsgZnJvbSBob21lXCI7XG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgICB9XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbXBsb3llZSA9IChzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9ySW50ZXJmYWNlfFRlYWNoZXJJbnRlcmZhY2UgPT4ge1xuICAgIGlmICggdHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3IgPSAoZW1wbG95ZWU6IERpcmVjdG9ySW50ZXJmYWNlIHwgVGVhY2hlckludGVyZmFjZSk6IGVtcGxveWVlIGlzIERpcmVjdG9ySW50ZXJmYWNlID0+IHtcbiAgICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn1cblxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVXb3JrID0gKGVtcGxveWVlOiBEaXJlY3RvckludGVyZmFjZSB8IFRlYWNoZXJJbnRlcmZhY2UpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=