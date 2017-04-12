// Compiled by ClojureScript 1.9.198 {}
goog.provide('future_app.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.spec');
goog.require('future_app.db');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
future_app.events.check_and_throw = (function future_app$events$check_and_throw(spec,db,p__50109){
var vec__50113 = p__50109;
var event = cljs.core.nth.call(null,vec__50113,(0),null);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,db))){
return null;
} else {
var explain_data = cljs.spec.explain_data.call(null,spec,db);
throw cljs.core.ex_info.call(null,[cljs.core.str("Spec check after "),cljs.core.str(event),cljs.core.str(" failed: "),cljs.core.str(explain_data)].join(''),explain_data);
}
});
future_app.events.validate_spec = (cljs.core.truth_(goog.DEBUG)?re_frame.core.after.call(null,cljs.core.partial.call(null,future_app.events.check_and_throw,new cljs.core.Keyword("future-app.db","app-db","future-app.db/app-db",-653021337))):cljs.core.PersistentVector.EMPTY);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),future_app.events.validate_spec,(function (_,___$1){
return future_app.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),future_app.events.validate_spec,(function (db,p__50116){
var vec__50117 = p__50116;
var _ = cljs.core.nth.call(null,vec__50117,(0),null);
var value = cljs.core.nth.call(null,vec__50117,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=events.js.map