// To parse this data:
//
//   import { Convert } from "./file";
//
//   const koliving = Convert.toKoliving(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Koliving {
  data: Data;
}

export interface Data {
  property: Property;
}

export interface Property {
  _id:                          string;
  propertyIdNumber:             number;
  pictures:                     Picture[];
  videos:                       null;
  isDeactivated:                boolean;
  isPublished:                  boolean;
  type:                         Type | null;
  landlord:                     null | string;
  floor:                        number | null;
  nbFloors:                     number | null;
  nbBedrooms:                   number;
  nbRooms:                      number;
  nbUnavailableRooms:           null;
  hasUnavailableRooms:          null;
  announceValidationStatus:     AnnounceValidationStatus;
  surface:                      number;
  surfaceTotal:                 number | null;
  virtualVisitUrl:              null | string;
  title:                        string;
  description:                  string;
  addressObj:                   AddressObj;
  address:                      string;
  address2:                     null;
  country:                      Country;
  locality:                     string;
  neighborhood:                 Neighborhood | null;
  place:                        null | string;
  postcode:                     string;
  region:                       Region | null;
  department:                   null | string;
  latitude:                     number;
  longitude:                    number;
  amenities:                    string[];
  hasElevator:                  boolean | null;
  isKolivingPlus:               boolean;
  isCrushed:                    boolean;
  createdAt:                    null;
  updatedAt:                    null;
  includesCoOwnershipUtilities: null;
  company:                      Company | null;
  rentType:                     PropertyRentType;
  rentInfos:                    RentInfos;
  tenant:                       Tenant | null;
  pendingBooking:               PendingBooking | null;
  rooms:                        Room[];
  __typename:                   PropertyTypename;
}

export enum PropertyTypename {
  PropertyResponseDto = "PropertyResponseDto",
}

export interface AddressObj {
  street:       string;
  city:         string;
  zip:          string;
  neighborhood: Neighborhood | null;
  __typename:   AddressObjTypename;
}

export enum AddressObjTypename {
  PropertyAddressDto = "PropertyAddressDto",
}

export enum Neighborhood {
  Empty = "",
  Opéra = "Opéra",
  PorteSaintDenis = "Porte Saint-Denis",
}

export enum AnnounceValidationStatus {
  Valid = "valid",
}

export interface Company {
  _id:              ID;
  name:             Name;
  description:      string;
  logoUrl:          string;
  rentType:         CompanyRentType;
  areVisitsEnabled: boolean;
  __typename:       CompanyTypename;
}

export enum CompanyTypename {
  PropertyCompanyResponseDto = "PropertyCompanyResponseDto",
}

export enum ID {
  The6155A48Cd767776Cbe8D4Ace = "6155a48cd767776cbe8d4ace",
  The619E67785Fea0E0016492B9B = "619e67785fea0e0016492b9b",
  The61A0Bf5F80B25E0016798C4A = "61a0bf5f80b25e0016798c4a",
  The61B873Fc9E450D0016E35245 = "61b873fc9e450d0016e35245",
  The61B89B5D9E450D0016E36C3A = "61b89b5d9e450d0016e36c3a",
}

export enum Name {
  AllSuitesAppartHotelMassyPalaiseau = "ALL SUITES APPART HOTEL MASSY PALAISEAU",
  AllSuitesAppartHotelOrlyRungis = "ALL SUITES APPART HOTEL ORLY RUNGIS",
  ColivingCitiz = "Coliving Citiz",
  Colonies = "Colonies",
  KalizGestion = "Kaliz Gestion",
}

export enum CompanyRentType {
  Individual = "individual",
}

export enum Country {
  France = "France",
}

export interface PendingBooking {
  _id:        string;
  state:      string;
  __typename: string;
}

export interface Picture {
  _id:        string;
  url:        string;
  position:   number;
  __typename: PictureTypename;
}

export enum PictureTypename {
  PictureDto = "PictureDto",
}

export enum Region {
  ÎleDeFrance = "Île-de-France",
}

export interface RentInfos {
  state:                 State | null;
  price:                 number;
  rentPrice:             number;
  utilities:             number;
  deposit:               number;
  availableAt:           Date | null;
  isAvailable:           boolean;
  minimumRentalDuration: MinimumRentalDuration;
  __typename:            RentInfosTypename;
}

export enum RentInfosTypename {
  RentInfosResponseDto = "RentInfosResponseDto",
}

export enum MinimumRentalDuration {
  LongTerm = "LONG_TERM",
  MidTerm = "MID_TERM",
  ShortTerm = "SHORT_TERM",
}

export enum State {
  Available = "AVAILABLE",
}

export enum PropertyRentType {
  Entire = "ENTIRE",
}

export interface Room {
  _id:                string;
  roomIdNumber:       number;
  surface:            number;
  pendingBooking:     null;
  rentInfos:          RentInfos;
  tenant:             null;
  isDeactivated:      boolean;
  hasPrivateBathroom: boolean;
  typeOfBed:          TypeOfBed;
  pictures:           Picture[] | null;
  __typename:         RoomTypename;
}

export enum RoomTypename {
  RoomResponseDto = "RoomResponseDto",
}

export enum TypeOfBed {
  DoubleBed = "doubleBed",
}

export interface Tenant {
  _id:              string;
  socialStatus:     string;
  gender:           null | string;
  age:              number;
  firstname:        string;
  lastname:         string;
  phone:            string;
  bookingStartDate: Date;
  __typename:       string;
}

export enum Type {
  Apt = "apt",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toKoliving(json: string): Koliving[] {
      return cast(JSON.parse(json), a(r("Koliving")));
  }

  public static kolivingToJson(value: Koliving[]): string {
      return JSON.stringify(uncast(value, a(r("Koliving"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
      throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue("Date", val);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue("object", val);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, prop.key);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "Koliving": o([
      { json: "data", js: "data", typ: r("Data") },
  ], false),
  "Data": o([
      { json: "property", js: "property", typ: r("Property") },
  ], false),
  "Property": o([
      { json: "_id", js: "_id", typ: "" },
      { json: "propertyIdNumber", js: "propertyIdNumber", typ: 0 },
      { json: "pictures", js: "pictures", typ: a(r("Picture")) },
      { json: "videos", js: "videos", typ: null },
      { json: "isDeactivated", js: "isDeactivated", typ: true },
      { json: "isPublished", js: "isPublished", typ: true },
      { json: "type", js: "type", typ: u(r("Type"), null) },
      { json: "landlord", js: "landlord", typ: u(null, "") },
      { json: "floor", js: "floor", typ: u(0, null) },
      { json: "nbFloors", js: "nbFloors", typ: u(0, null) },
      { json: "nbBedrooms", js: "nbBedrooms", typ: 0 },
      { json: "nbRooms", js: "nbRooms", typ: 0 },
      { json: "nbUnavailableRooms", js: "nbUnavailableRooms", typ: null },
      { json: "hasUnavailableRooms", js: "hasUnavailableRooms", typ: null },
      { json: "announceValidationStatus", js: "announceValidationStatus", typ: r("AnnounceValidationStatus") },
      { json: "surface", js: "surface", typ: 3.14 },
      { json: "surfaceTotal", js: "surfaceTotal", typ: u(0, null) },
      { json: "virtualVisitUrl", js: "virtualVisitUrl", typ: u(null, "") },
      { json: "title", js: "title", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "addressObj", js: "addressObj", typ: r("AddressObj") },
      { json: "address", js: "address", typ: "" },
      { json: "address2", js: "address2", typ: null },
      { json: "country", js: "country", typ: r("Country") },
      { json: "locality", js: "locality", typ: "" },
      { json: "neighborhood", js: "neighborhood", typ: u(r("Neighborhood"), null) },
      { json: "place", js: "place", typ: u(null, "") },
      { json: "postcode", js: "postcode", typ: "" },
      { json: "region", js: "region", typ: u(r("Region"), null) },
      { json: "department", js: "department", typ: u(null, "") },
      { json: "latitude", js: "latitude", typ: 3.14 },
      { json: "longitude", js: "longitude", typ: 3.14 },
      { json: "amenities", js: "amenities", typ: a("") },
      { json: "hasElevator", js: "hasElevator", typ: u(true, null) },
      { json: "isKolivingPlus", js: "isKolivingPlus", typ: true },
      { json: "isCrushed", js: "isCrushed", typ: true },
      { json: "createdAt", js: "createdAt", typ: null },
      { json: "updatedAt", js: "updatedAt", typ: null },
      { json: "includesCoOwnershipUtilities", js: "includesCoOwnershipUtilities", typ: null },
      { json: "company", js: "company", typ: u(r("Company"), null) },
      { json: "rentType", js: "rentType", typ: r("PropertyRentType") },
      { json: "rentInfos", js: "rentInfos", typ: r("RentInfos") },
      { json: "tenant", js: "tenant", typ: u(r("Tenant"), null) },
      { json: "pendingBooking", js: "pendingBooking", typ: u(r("PendingBooking"), null) },
      { json: "rooms", js: "rooms", typ: a(r("Room")) },
      { json: "__typename", js: "__typename", typ: r("PropertyTypename") },
  ], false),
  "AddressObj": o([
      { json: "street", js: "street", typ: "" },
      { json: "city", js: "city", typ: "" },
      { json: "zip", js: "zip", typ: "" },
      { json: "neighborhood", js: "neighborhood", typ: u(r("Neighborhood"), null) },
      { json: "__typename", js: "__typename", typ: r("AddressObjTypename") },
  ], false),
  "Company": o([
      { json: "_id", js: "_id", typ: r("ID") },
      { json: "name", js: "name", typ: r("Name") },
      { json: "description", js: "description", typ: "" },
      { json: "logoUrl", js: "logoUrl", typ: "" },
      { json: "rentType", js: "rentType", typ: r("CompanyRentType") },
      { json: "areVisitsEnabled", js: "areVisitsEnabled", typ: true },
      { json: "__typename", js: "__typename", typ: r("CompanyTypename") },
  ], false),
  "PendingBooking": o([
      { json: "_id", js: "_id", typ: "" },
      { json: "state", js: "state", typ: "" },
      { json: "__typename", js: "__typename", typ: "" },
  ], false),
  "Picture": o([
      { json: "_id", js: "_id", typ: "" },
      { json: "url", js: "url", typ: "" },
      { json: "position", js: "position", typ: 0 },
      { json: "__typename", js: "__typename", typ: r("PictureTypename") },
  ], false),
  "RentInfos": o([
      { json: "state", js: "state", typ: u(r("State"), null) },
      { json: "price", js: "price", typ: 0 },
      { json: "rentPrice", js: "rentPrice", typ: 0 },
      { json: "utilities", js: "utilities", typ: 0 },
      { json: "deposit", js: "deposit", typ: 3.14 },
      { json: "availableAt", js: "availableAt", typ: u(Date, null) },
      { json: "isAvailable", js: "isAvailable", typ: true },
      { json: "minimumRentalDuration", js: "minimumRentalDuration", typ: r("MinimumRentalDuration") },
      { json: "__typename", js: "__typename", typ: r("RentInfosTypename") },
  ], false),
  "Room": o([
      { json: "_id", js: "_id", typ: "" },
      { json: "roomIdNumber", js: "roomIdNumber", typ: 0 },
      { json: "surface", js: "surface", typ: 0 },
      { json: "pendingBooking", js: "pendingBooking", typ: null },
      { json: "rentInfos", js: "rentInfos", typ: r("RentInfos") },
      { json: "tenant", js: "tenant", typ: null },
      { json: "isDeactivated", js: "isDeactivated", typ: true },
      { json: "hasPrivateBathroom", js: "hasPrivateBathroom", typ: true },
      { json: "typeOfBed", js: "typeOfBed", typ: r("TypeOfBed") },
      { json: "pictures", js: "pictures", typ: u(a(r("Picture")), null) },
      { json: "__typename", js: "__typename", typ: r("RoomTypename") },
  ], false),
  "Tenant": o([
      { json: "_id", js: "_id", typ: "" },
      { json: "socialStatus", js: "socialStatus", typ: "" },
      { json: "gender", js: "gender", typ: u(null, "") },
      { json: "age", js: "age", typ: 0 },
      { json: "firstname", js: "firstname", typ: "" },
      { json: "lastname", js: "lastname", typ: "" },
      { json: "phone", js: "phone", typ: "" },
      { json: "bookingStartDate", js: "bookingStartDate", typ: Date },
      { json: "__typename", js: "__typename", typ: "" },
  ], false),
  "PropertyTypename": [
      "PropertyResponseDto",
  ],
  "AddressObjTypename": [
      "PropertyAddressDto",
  ],
  "Neighborhood": [
      "",
      "Opéra",
      "Porte Saint-Denis",
  ],
  "AnnounceValidationStatus": [
      "valid",
  ],
  "CompanyTypename": [
      "PropertyCompanyResponseDto",
  ],
  "ID": [
      "6155a48cd767776cbe8d4ace",
      "619e67785fea0e0016492b9b",
      "61a0bf5f80b25e0016798c4a",
      "61b873fc9e450d0016e35245",
      "61b89b5d9e450d0016e36c3a",
  ],
  "Name": [
      "ALL SUITES APPART HOTEL MASSY PALAISEAU",
      "ALL SUITES APPART HOTEL ORLY RUNGIS",
      "Coliving Citiz",
      "Colonies",
      "Kaliz Gestion",
  ],
  "CompanyRentType": [
      "individual",
  ],
  "Country": [
      "France",
  ],
  "PictureTypename": [
      "PictureDto",
  ],
  "Region": [
      "Île-de-France",
  ],
  "RentInfosTypename": [
      "RentInfosResponseDto",
  ],
  "MinimumRentalDuration": [
      "LONG_TERM",
      "MID_TERM",
      "SHORT_TERM",
  ],
  "State": [
      "AVAILABLE",
  ],
  "PropertyRentType": [
      "ENTIRE",
  ],
  "RoomTypename": [
      "RoomResponseDto",
  ],
  "TypeOfBed": [
      "doubleBed",
  ],
  "Type": [
      "apt",
  ],
};
