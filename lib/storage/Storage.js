var storage = (function () {
    var instance;
    function init() {// Private methods (_privateMethod()) and variables
        let projectAttributes;
        let projectName;
        let karalundiComponents = [];
        let biometricComponents;
        return { // Public methods and variables
            setProjectName: function(name){
                projectName = name;
            },
            getProjectName: function(){
                return projectName
            },
            setProjectAttributes: function(attributes){
                projectAttributes = attributes;
            },
            getProjectAttributes: function(){
                return projectAttributes;
            },
            setKaralundiComponents: function(components){
                karalundiComponents = components;
            },
            getKaralundiComponents: function(){
                return karalundiComponents;
            },
            setBiometricComponents: function(components){
                biometricComponents = components;
            },
            getBiometricComponents: function(){
                return biometricComponents;
            }
        };
    };

    return {
        // Get the Singleton instance if one exists or create one if it doesn't
        getInstance: function () {
            if ( !instance )
                instance = init();
            return instance;
        }
    };
})();

module.exports = storage;