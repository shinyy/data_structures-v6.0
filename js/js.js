$(function(){
	function set(){
		var items={};
		this.has=function(val){
//			return val in items;
			return items.hasOwnProperty(val);
		};
		this.add=function(val){
			if(!this.has(val)){
				items[val]=val;
				return true;
			}
			return false;
		};
		this.remove=function(val){
			if(this.has(val)){
				delete items[val];
				return true;
			}
			return false;
		};
		this.clear=function(){
			items={};
		};
		this.values=function(){
			return Object.keys(items);
		};
		this.size=function(){
			return Object.keys(items).length;
		};
		this.union=function(otherset){
			var unionset=new set();
			var values=this.values();
			for(var i=0;i<values.length;i++){
				unionset.add(values[i]);
			};
			values=otherset.values();
			for(var i=0;i<values.length;i++){
				unionset.add(values[i]);
			}
			return unionset;
		};
		this.intersection=function(otherset){
			var intersectionset=new set();
			values=this.values();
			for(var i=0;i<values.length;i++){
				if(otherset.has(values[i])){
					intersectionset.add(values[i])
				}
			};
			return intersectionset;
		};
		this.difference=function(otherset){
			var differenceset=new set();
			var values=this.values();
			
			for(var i=0;i<values.length;i++){
				if(!otherset.has(values[i])){
					differenceset.add(values[i]);
				};
			};
			return differenceset;
		};
		this.subset=function(otherset){
			if(this.size()>otherset.size()){
				return false;
			}else{
				var values=this.values();
				for(var i=0;i<values.length;i++){
					if(!otherset.has(values[i])){
						return false;
					};
				};
				return true;
			}
		};
	};
	
	var test=new set();
	test.add(1);
	test.add(2);
//	console.log(test.has(2))
//	test.remove(2);
	console.log(test.size())
	console.log(test.values());
	
	var test2=new set();
	test2.add(1);
	test2.add(2);
	test2.add(3);
	test2.add(4);
	


	console.log(test.union(test2).values());
	console.log(test.intersection(test2).values());
	console.log(test2.difference(test).values());
	console.log(test.subset(test2));
	
})
	
