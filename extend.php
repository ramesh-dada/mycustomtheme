<?php

namespace rameshdada\customtheme;

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    new \Afrux\ThemeBase\Extend\Init('ramesh-dada-customtheme'),
    new \Afrux\ThemeBase\Extend\Footer,
    new \Afrux\ThemeBase\Extend\UploadableBanner,
    new \Afrux\ThemeBase\Extend\ExposeLaravelVersionToDashboard,

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')

    (new Extend\View)
        ->namespace("ramesh-dada-customtheme", __DIR__."/views"),

    new Extend\Locales(__DIR__.'/locale'),
];
