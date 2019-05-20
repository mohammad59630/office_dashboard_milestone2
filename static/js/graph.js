/* global queue dc d3 crossfilter */
queue()
     .defer(d3.csv, "static/data.csv")
     .await(makeGraphs);
     
function makeGraphs(error, data){
     var ndx=crossfilter(data); 
    
    show_jobTitle_selector(ndx);
    show_gender_selector(ndx);
    display_gender_percent(ndx, 'Male', '#percent-male');
    display_gender_percent(ndx, 'Female', '#percent-female');
    show_gender_balance(ndx);
    show_average_bonus(ndx);
    show_job_title_distribution(ndx);
    show_perfEval_per_person(ndx);
    show_age_per_person(ndx);
    show_bonus_per_person(ndx);
    
    dc.renderAll();
}
     
function show_jobTitle_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('jobTitle'));
    var group = dim.group();
    
    dc.selectMenu("#jobTitle-selector")
        .dimension(dim)
        .group(group);
}

function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group();
    
    dc.selectMenu("#gender-selector")
        .dimension(dim)
        .group(group);
}

function display_gender_percent(ndx, gender, element) {
    var genderPercent = ndx.groupAll().reduce(
        // Sum totals for each gender type
        function(p, v) {
            p.total++;
            if (v.gender === gender) {
                p.gender_count++;
            }
            return p;
        },
        function(p, v) {
            p.total--;
            if (v.gender === gender) {
                p.gender_count--;
            }
            return p;
        },
        function() {
            return { total: 0, gender_count: 0 };
        }
   );

    

    dc.numberDisplay(element)
        .formatNumber(d3.format('.2%'))
        .valueAccessor(function(d) {
            if (d.gender_count == 0) {
                return 0;
            }
            else {
                return (d.gender_count / d.total);
            }
        })
        .group(genderPercent);
}


    
function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var  group = dim.group();
    
    dc.barChart("#gender-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("gender")
        .yAxis().ticks(20);
}
 
 function show_average_bonus(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    
    function add_item(p, v) {
        p.count++;
        p.total += parseInt(v.bonus); // We will add the bonus to the current total
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= parseInt(v.bonus);
            p.average = p.total / p.count;
        }
        return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }

    var averageBonusByGender = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-bonus")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(averageBonusByGender)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(4);   
}
function show_job_title_distribution(ndx) {
    
    function jobTitleByGender(dimension, jobTitle) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if(v.jobTitle == jobTitle) {
                    p.match++;
                }
                return p;
            },
            function (p, v) {
                p.total--;
                if(v.jobTitle == jobTitle) {
                    p.match--;
                }
                return p;
            },
            function () {
                return {total: 0, match: 0};
            }
        );
    }
    
    var dim = ndx.dimension(dc.pluck("gender"));
    var GraphicDesginerByGender = jobTitleByGender(dim, "Graphic Desginer");
    var SoftwareEnginerByGender = jobTitleByGender(dim, "Software Engineer");
    var WarehouseAssociateByGender = jobTitleByGender(dim, "Warehouse Associate");
    var SaleAssociateByGender =  jobTitleByGender(dim, "Sales Associate");
    var DataScientistByGender =  jobTitleByGender(dim, "Data Scientist");
    var ITByGender =  jobTitleByGender(dim, "IT");
    var DriverByGender =  jobTitleByGender(dim, "Driver");
    var FinancialAnalystByGender =  jobTitleByGender(dim, "Financial Analyst");
    var MarketingAssociateByGender =  jobTitleByGender(dim, "Marketing Associate");
    var ManagerByGender =  jobTitleByGender(dim, "Manager");

    
    dc.barChart("#jobtitle-distribution")
        .width(400)
        .height(300)
        .dimension(dim)
        .group(GraphicDesginerByGender, "GraphicDesginer")
        .stack(SoftwareEnginerByGender, "SoftwareEnginer")
        .stack(WarehouseAssociateByGender, "WarehouseAssociate")
        .stack(DataScientistByGender, "DataScientist") 
        .stack(ITByGender, "IT")
        .stack(DriverByGender, "Driver")
        .stack(FinancialAnalystByGender, "FinancialAnalyst")
        .stack(MarketingAssociateByGender, "MarketingAssociate")
        .stack(ManagerByGender, "Manager")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30});
}
function show_perfEval_per_person(ndx){
    
    var name_dim = ndx.dimension(dc.pluck("perfEval"));
    var show_perfEval_per_person = name_dim.group().reduceSum(dc.pluck("perfEval"));
    dc.pieChart('#per-perfEval-chart')
    .height(330)
    .radius(90)
    .transitionDuration(1500)
    .dimension(name_dim)
    .group(show_perfEval_per_person)
}
  function show_age_per_person(ndx){
      
    var name_dim = ndx.dimension(dc.pluck("age"));
    var show_age_per_person = name_dim.group().reduceSum(dc.pluck("age"));
    dc.pieChart('#per-age-chart')
    .height(330)
    .radius(90)
    .transitionDuration(1500)
    .dimension(name_dim)
    .group(show_age_per_person)
  } 
 function show_bonus_per_person(ndx){
      
    var name_dim = ndx.dimension(dc.pluck("bonus"));
    var show_bonus_per_person = name_dim.group().reduceSum(dc.pluck("bonus"));
    dc.pieChart('#per-bonus-chart')
    .height(330)
    .radius(90)
    .transitionDuration(1500)
    .dimension(name_dim)
    .group(show_bonus_per_person)  
}
 function show_bonus_per_person(ndx){
      
    var name_dim = ndx.dimension(dc.pluck("bonus"));
    var show_bonus_per_person = name_dim.group().reduceSum(dc.pluck("bonus"));
    dc.pieChart('#per-bonus-chart')
    .height(330)
    .radius(90)
    .transitionDuration(1500)
    .dimension(name_dim)
    .group(show_bonus_per_person)
 }