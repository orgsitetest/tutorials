jQuery(function(){
	// header
	// headerLog
	var initOpenCloseJoin = function(){
		jQuery('.headerLog').openClose({
			hideOnClickOutside: true,
			activeClass: 'active',
			opener: '.opener',
			slider: '.popup',
			animSpeed: 400,
			effect: 'slide'
		});
	};

	if (jQuery.browser.msie && jQuery.browser.version < 9) {
		initOpenCloseJoin();
	} else {
		ResponsiveHelper.addRange({
			'..1000': {
				on: function() {
					jQuery('.headerLog').openClose({
						wrapper: '#page',
						otherOpeners: '.header-holder .mobile-btn',
						hideOnClickOutside: true,
						activeClass: 'active',
						opener: '.opener',
						slider: '.popup',
						animSpeed: 400,
						effect: 'push',
						setWindowHeight: true,
						animStart: function(state, self){
							if (state) {
								jQuery('html').addClass('active-panel');
							} else {
								jQuery('html').removeClass('active-panel');
							}
						}
					});
				},
				off: function() {
					if (jQuery('.headerLog').data('OpenClose')) {
						jQuery('.headerLog').data('OpenClose').destroy();
						jQuery('html').removeClass('active-panel');
					}
				}
			},
			'1001..': {
				on: function(){
					initOpenCloseJoin();
				},
				off: function(){
					if (jQuery('.headerLog').data('OpenClose')) {
						jQuery('.headerLog').data('OpenClose').destroy();
					}
				}
			}
		});
	}
	// header search
	jQuery('.headerSearch').openClose({
		hideOnClickOutside: true,
		activeClass: 'active',
		opener: '.opener',
		slider: '.popup',
		animSpeed: 400,
		effect: 'slide',
		animEnd: function(open, self){
			if (!open) {
				self.slider.find('input[type="search"]').blur();
			}
		}
	});
	// main navigation
	jQuery('.open-close').openClose({
		activeClass: 'active',
		opener: '.opener',
		slider: '.slide',
		effect: 'none',
		animEnd: function(self){
			this.holder.parents('li').trigger('resize.drop');
		}
	});

	var initNavigation = function(){
		jQuery('ul.nav-area').each(function(){
			var hold = jQuery(this);
			var items = hold.find('.drop-holder > ul > li');
			items.each(function(){
				var item = jQuery(this);
				var dropParent = item.parents('.drop-holder');
				var setParent = dropParent.find('>ul');
				var drop = item.find('.drop-holder');
				var resizeDrop = function(){
					if (drop.length) {
						drop.css({height: ''});
						setParent.css({height: ''});
						if (dropParent.height() > drop.height()) {
							drop.css({
								height: dropParent.height() - parseInt(drop.css('border-bottom-width'))
							});
						} else {
							setParent.css({
								height: drop.height() - parseInt(setParent.css('padding-top')) - parseInt(setParent.css('padding-bottom'))
							});
						}
					}
				};
				item.hover(resizeDrop, function(){
					drop.css({height: ''});
					setParent.css({height: ''});
				}).on('resize.drop', resizeDrop);
			});
			hold.animDropdown({
				items: '>li',
				drop: '>.drop-area >.drop-wrapper',
				animSpeed: 400,
				effect: 'slide'
			});
		});
	};

	if (jQuery.browser.msie && jQuery.browser.version < 9) {
		initNavigation();
	} else {
		ResponsiveHelper.addRange({
			'..1000': {
				on: function() {
					jQuery('.mainNavigation').openClose({
						wrapper: '#page',
						otherOpeners: '.header-holder .mobile-btn',
						hideOnClickOutside: true,
						activeClass: 'active',
						opener: '.nav-opener',
						slider: '.nav-block',
						animSpeed: 400,
						setWindowHeight: true,
						effect: 'push',
						animStart: function(state, self){
							if (state) {
								jQuery('html').addClass('active-panel');
							} else {
								jQuery('html').removeClass('active-panel');
							}
						}
					});
					jQuery('.nav-area > .has-drop').openClose({
						activeClass: 'active',
						opener: ' > a',
						slider: ' > .drop-area',
						animSpeed: 400,
						effect: 'slide'
					});
					jQuery('.drop-area .drop-holder > ul').slideAccordion({
						opener: '> a',
						slider: '> .drop-detailed',
						animSpeed: 400
					});
				},
				off: function(){
					jQuery('.mainNavigation').each(function(){
						if (jQuery(this).data('OpenClose')) {
							jQuery(this).data('OpenClose').destroy();
							jQuery('html').removeClass('active-panel');
						}
					});
					jQuery('.nav-area > .has-drop').each(function(){
						if (jQuery(this).data('OpenClose')) {
							jQuery(this).data('OpenClose').destroy();
						}
					});
					jQuery('.drop-area .drop-holder > ul').each(function(){
						var hold = jQuery(this);
						var items = hold.find('>li');
						items.each(function(){
							var item = jQuery(this);
							var drop = item.find('>.drop-detailed');
							var opener = item.find('>a');
							item.removeClass('active');
							drop.removeAttr('style');
							opener.off('click');
						});
					});
				}
			},
			'1001..': {
				on: function(){
					initNavigation();
				},
				off: function(){
					jQuery('ul.nav-area').each(function(){
						var hold = jQuery(this);
						var items = hold.find('>li');
						var drops = hold.find('.drop-wrapper');
						items.unbind('mouseenter mouseleave').removeClass('hover drop-active');
						drops.removeAttr('style');
						drops.unwrap();
						drops.each(function(){
							var drop = jQuery(this);
							var subitems = drop.find('>.drop-holder >ul >li');
							subitems.each(function(){
								var subitem = jQuery(this);
								subitem.off('mouseenter mouseleave');
							});
						});
					});
					jQuery(window).trigger('resize');
				}
			}
		});
	}
	
	// footer
	// add class
	jQuery('section.footer .menu > ul > li:nth-child(2n+1)').addClass('odd');
	jQuery('.footerNavGroup').each(function(){
		var hold = jQuery(this);
		var copyright = hold.find('.copyright');
		var legalContent = hold.find('.legalContentHolder');
		var legalHolder = legalContent.parent();
		var countryContent = hold.find('.countryselector');
		
		if (jQuery.browser.msie && jQuery.browser.version < 9) return;

		ResponsiveHelper.addRange({
			'..767': {
				on: function() {
					legalContent.insertAfter(copyright);
					legalHolder.append(countryContent);
				},
				off: function(){
					legalContent.appendTo(legalHolder);
					countryContent.insertBefore(copyright);
				}
			}
		});
	});
	// socialLinksGroup
	if (!(jQuery.browser.msie && jQuery.browser.version < 9)) {
		jQuery('.sapdx-follow').each(function(){
			var hold = jQuery(this);
			var set = hold.find('.sapdx-social-links-group');
			var items = set.find('>li');
			items.each(function(){
				var item = jQuery(this);
				var link = item.find('>.opener');
				var tab = item.find('>.open-close');
				if (tab.length) {
					tab.attr('id', link.attr('href').substr(1));

					ResponsiveHelper.addRange({
						'..767': {
							on: function() {
								tab.removeClass('open-close').addClass('tab').appendTo(hold);
							},
							off: function() {
								link.unbind('click');
								item.removeClass('active');
								tab.removeClass('js-tab-hidden');
								tab.removeAttr('style');
								tab.removeClass('tab').addClass('open-close').appendTo(item);
							}
						}
					});
				}
			});
		});
	}
	var initOpenClose = function() {
		jQuery('.sapdx-social-links-group li').openClose({
			hideOnClickOutside: true,
			activeClass: 'active',
			opener: '.opener',
			slider: '.open-close',
			animSpeed: 400,
			effect: 'slide'
		});
	};
	
	if (jQuery.browser.msie && jQuery.browser.version < 9) {
		initOpenClose();
	} else {
		ResponsiveHelper.addRange({
			'..767': {
				on: function() {
					jQuery('ul.sapdx-social-links-group').contentTabs({
						addToParent: true,
						animSpeed: 400,
						effect: 'slide',
						tabLinks: 'a',
						close: true
					});
				}
			},
			'768..': {
				on: function(){
					initOpenClose();
				},
				off: function(){
					jQuery('.sapdx-social-links-group li').each(function(){
						var item = jQuery(this);
						if (item.data('OpenClose')) {
							item.data('OpenClose').destroy();
						}
					});
				}
			}
		});
	}
	// countryselector
	jQuery('.countryselector').openClose({
		hideOnClickOutside: true,
		activeClass: 'active',
		opener: '#countryselector-action',
		slider: '#country-flayout',
		animSpeed: 400,
		effect: 'slide'
	});

	if (!(jQuery.browser.msie && jQuery.browser.version < 9)) {
		ResponsiveHelper.addRange({
			'..1000': {
				on: function() {
					jQuery('.countryselector-col').openClose({
						hideOnClickOutside: true,
						activeClass: 'active',
						opener: 'h3',
						slider: '.countryselector-content',
						animSpeed: 400,
						effect: 'slide'
					});
					jQuery('.countryselector-countries').each(function(){
						jQuery(this).navigationSelect({
							levelIndentHTML: '&bull; ',
							defaultOptionAttr: 'title',
							defaultOptionText: 'Choose your country'
						});
					});
				},
				off: function(){
					jQuery('.countryselector-col').each(function(){
						if (jQuery(this).data('OpenClose')) {
							jQuery(this).data('OpenClose').destroy();
						}
					});
					jQuery('.countryselector-countries').each(function(){
						jQuery(this).siblings('select.nav-select').remove();
					});
				}
			}
		});
	}
	// legal content
	jQuery('.legalContentHolder').openClose({
		hideOnClickOutside: true,
		activeClass: 'active',
		opener: '.opener',
		slider: '.legalContent',
		animSpeed: 400,
		effect: 'slide'
	});
	ResponsiveHelper.addRange({
		'..767': {
			on: function() {
				jQuery('.tutorialCard .tags-wrapper').openClose({
					hideOnClickOutside: true,
					activeClass: 'active',
					opener: '.opener',
					slider: '.tags',
					animSpeed: 400,
					effect: 'slide',
					onInit: function(self) {
						self.opener.text('View tags');
					},
					animStart : function (open, self) {
						if(open) {
							self.opener.text('Hide tags');
						} else {
							self.opener.text('View tags');
						}
					}
				});
			},
			off: function() {
				jQuery('.tutorialCard .tags-wrapper').data('OpenClose').destroy();
				jQuery('.tutorialCard .tags-wrapper .opener').text('Tags');
			}
		}
	});
});