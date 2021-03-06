"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DynamoDB = require("aws-sdk/clients/dynamodb");
var dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
var dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
var assert = require('assert');
var region = 'us-east-1';
var client = new DynamoDB({ region: region });
var mapper = new dynamodb_data_mapper_1.DataMapper({ client: client });
var DBClass = /** @class */ (function () {
    function DBClass() {
    }
    Object.defineProperty(DBClass.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBClass.prototype, "aNumber", {
        get: function () {
            return this._aNumber;
        },
        set: function (value) {
            this._aNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBClass.prototype, "aString", {
        get: function () {
            return this._aString;
        },
        set: function (value) {
            this._aString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBClass.prototype, "aStringArray", {
        get: function () {
            return this._aStringArray;
        },
        set: function (value) {
            this._aStringArray = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        dynamodb_data_mapper_annotations_1.autoGeneratedHashKey(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DBClass.prototype, "id", null);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DBClass.prototype, "aNumber", null);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DBClass.prototype, "aString", null);
    DBClass = __decorate([
        dynamodb_data_mapper_annotations_1.table('MapperBug')
    ], DBClass);
    return DBClass;
}());
describe("DBMapper Test", function () {
    it('null values - pass', function () {
        return __awaiter(this, void 0, void 0, function () {
            var dbObject, result, reason_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dbObject = new DBClass();
                        dbObject.aString = 'test';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mapper.put(dbObject)];
                    case 2:
                        result = _a.sent();
                        console.log('Got here');
                        return [3 /*break*/, 4];
                    case 3:
                        reason_1 = _a.sent();
                        assert.fail(JSON.stringify(reason_1));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
    it('null values - fail', function () {
        return __awaiter(this, void 0, void 0, function () {
            var dbObject, result, reason_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dbObject = new DBClass();
                        dbObject.aNumber = null;
                        dbObject.aString = 'test';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mapper.put(dbObject)];
                    case 2:
                        result = _a.sent();
                        console.log('Got here');
                        return [3 /*break*/, 4];
                    case 3:
                        reason_2 = _a.sent();
                        assert.fail(JSON.stringify(reason_2));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDBGQUE2RjtBQUM3RixrRUFBcUQ7QUFFckQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBR2pDLElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUMzQixJQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBQzlDLElBQU0sTUFBTSxHQUFHLElBQUksaUNBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBSWhEO0lBQUE7SUEwQ0EsQ0FBQztJQWpDQSxzQkFBSSx1QkFBRTthQUFOO1lBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pCLENBQUM7YUFFRCxVQUFPLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFZLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFZLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxpQ0FBWTthQUFoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBaUIsS0FBZTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQTVCRDtRQURDLHVEQUFvQixFQUFFOzs7cUNBR3RCO0lBT0Q7UUFEQyw0Q0FBUyxFQUFFOzs7MENBR1g7SUFPRDtRQURDLDRDQUFTLEVBQUU7OzswQ0FHWDtJQTdCSSxPQUFPO1FBRFosd0NBQUssQ0FBQyxXQUFXLENBQUM7T0FDYixPQUFPLENBMENaO0lBQUQsY0FBQztDQUFBLEFBMUNELElBMENDO0FBR0QsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV6QixFQUFFLENBQUMsb0JBQW9CLEVBQUU7Ozs7Ozt3QkFFbEIsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7d0JBQy9CLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7O3dCQUlWLHFCQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFuQyxNQUFNLEdBQUcsU0FBMEI7d0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7d0JBR3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FFckMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFOzs7Ozs7d0JBRWxCLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO3dCQUMvQixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsUUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7d0JBSVYscUJBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQW5DLE1BQU0sR0FBRyxTQUEwQjt3QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozt3QkFHeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQU0sQ0FBQyxDQUFDLENBQUM7Ozs7OztLQUVyQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9