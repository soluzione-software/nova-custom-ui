<?php

namespace SoluzioneSoftware\NovaCustomUI;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Laravel\Nova\Nova;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        Nova::serving(function () {
            Nova::script('custom-ui', __DIR__.'/../dist/js/index.js');
        });
    }
}
