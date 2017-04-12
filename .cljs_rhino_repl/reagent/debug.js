// Compiled by ClojureScript 1.9.198 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__49818__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49819__i = 0, G__49819__a = new Array(arguments.length -  0);
while (G__49819__i < G__49819__a.length) {G__49819__a[G__49819__i] = arguments[G__49819__i + 0]; ++G__49819__i;}
  args = new cljs.core.IndexedSeq(G__49819__a,0);
} 
return G__49818__delegate.call(this,args);};
G__49818.cljs$lang$maxFixedArity = 0;
G__49818.cljs$lang$applyTo = (function (arglist__49820){
var args = cljs.core.seq(arglist__49820);
return G__49818__delegate(args);
});
G__49818.cljs$core$IFn$_invoke$arity$variadic = G__49818__delegate;
return G__49818;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49821__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49822__i = 0, G__49822__a = new Array(arguments.length -  0);
while (G__49822__i < G__49822__a.length) {G__49822__a[G__49822__i] = arguments[G__49822__i + 0]; ++G__49822__i;}
  args = new cljs.core.IndexedSeq(G__49822__a,0);
} 
return G__49821__delegate.call(this,args);};
G__49821.cljs$lang$maxFixedArity = 0;
G__49821.cljs$lang$applyTo = (function (arglist__49823){
var args = cljs.core.seq(arglist__49823);
return G__49821__delegate(args);
});
G__49821.cljs$core$IFn$_invoke$arity$variadic = G__49821__delegate;
return G__49821;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map