module.exports = {
    run: function(param, success, error) {
        cordova.exec(success, error, 'Echo', 'run', [param]);
    }
};
