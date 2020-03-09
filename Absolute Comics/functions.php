<?php 

// Register site navigation menus

    function register_my_menus() {
        register_nav_menus(
        array(
            'main-menu' => __( 'Main Menu' ),
        )
        );
    }
    add_action( 'init', 'register_my_menus' );


// Add post-thumbnail functionality

    if (function_exists('add_theme_support')) { add_theme_support('post-thumbnails'); }

    function wp_get_attachment( $attachment_id ) {

        $attachment = get_post( $attachment_id );
        return array(
            'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
            'caption' => $attachment->post_excerpt,
            'description' => $attachment->post_content,
            'href' => get_permalink( $attachment->ID ),
            'src' => $attachment->guid,
            'title' => $attachment->post_title
        );
    }


//Pages Tags &amp; Category Meta boxes

    function add_pages_meta_boxes() {
    add_meta_box(   'tagsdiv-post_tag', __('Page Tags'), 'post_tags_meta_box', 'page', 'side', 'low');
    add_meta_box(   'categorydiv', __('Categories'), 'post_categories_meta_box', 'page', 'normal', 'core');
    }
    add_action('add_meta_boxes', 'add_pages_meta_boxes');
    
    add_action('init','attach_category_to_page');
    function attach_category_to_page() {
        register_taxonomy_for_object_type('category','page');
    }


// function ac_filter_wp_title($currenttitle, $sep, $seplocal) {
// 	$site_name = get_bloginfo('name');
// 	$full_title = $site_name . $currenttitle;

// 	if( is_front_page() || is_home()){
// 		$site_desc = get_bloginfo('description');
// 		$full_title .=' '.$sep.' '.$site_desc;
// 	}
// 	return $full_title;
// }

// add_filter('wp_title', 'ac_filter_wp_title', 10, 3);


// Add class to the body tag on pages

    function body_class_for_pages( $classes ) {

        if ( is_singular( 'page' ) ) {
            global $post;
            $classes[] = 'page-' . $post->post_name;
        }

        return $classes;

    }
    add_filter( 'body_class', 'body_class_for_pages' );
