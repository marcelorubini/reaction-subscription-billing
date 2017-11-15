import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base'
import { Subscriptions } from "./lib/collections/collections"
import { methods } from "./methods/subscription-payments"
import { Hooks, Reaction, Logger } from "/server/api";

Hooks.Events.add("afterCoreInit", () => {
  //for logging and db subscription insert
  let user = Accounts.findUserByEmail('admin@localhost');
  //hardcoded for invoice generation, must be a created stripe user
  let stripeId = { 'id': 'cus_BeEougbwQiohAj' };

  Logger.info("::: Create a Subscription within subscription plugin");
  Meteor.call("subscriptions/process", user, stripeId, 'test_plan');
});