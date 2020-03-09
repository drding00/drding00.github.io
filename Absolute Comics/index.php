<?php get_header(); ?>

<div id="vector"></div>
    <main>
        <h1 class="section-titles">Latest Episodes</h1>

        <section id="episode-section">

            <div id="featured">
                <h2>November 25th 2019</h2>
                <div class="featured-image"><img src="./images/deadpool.jpg" alt=""/></div>
                <h3>Comicstorian Weekly 11/22</h3>
            </div>
			

                <div id="episode-list">
					
								<!-- the query -->
<?php $cat_query = new WP_Query ( array('category_name' => 'Current Videos') ); ?>

    <!-- if category has posts -->
    <?php if ( $cat_query -> have_posts() ) : ?>

        <!-- start the loop -->
        <?php while( $cat_query -> have_posts() ) : $cat_query -> the_post(); ?>
					
		            <div class="episode">
                        <h2><?php echo get_post_meta($post->ID, 'video_date', true); ?> </h2>
                        <div class="episode-image"><?php the_post_thumbnail(); ?></div>
                        <h3><?php the_title(); ?></h3>
                    </div> 

        <?php endwhile; ?> <!-- end loop -->

         
        <?php wp_reset_postdata(); ?>


    <!-- else if no posts, show message -->
<?php else : ?>
    <p><?php esc_html_e('Sorry, no posts were found!'); ?></p>
<?php endif; ?>


                </div> <!-- end episodes div -->

        </section>


<div id="watch-button"><a href="#">Watch More</a></div>


    </main>
<?php get_footer(); ?>