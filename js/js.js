var kana = {"0":[{"h":"あ","k":"ア","p":"а","hb":"a"},{"h":"ぁ","k":"ァ","p":"а","hb":"a"},{"h":"か","k":"カ","p":"ка","hb":"ka"},{"h":"が","k":"ガ","p":"га","hb":"ga"},{"h":"さ","k":"サ","p":"са","hb":"sa"},{"h":"ざ","k":"ザ","p":"дза","hb":"za"},{"h":"た","k":"タ","p":"та","hb":"ta"},{"h":"だ","k":"ダ","p":"да","hb":"da"},{"h":"な","k":"ナ","p":"на","hb":"na"},{"h":"は","k":"ハ","p":"ха","hb":"ha"},{"h":"ば","k":"バ","p":"ба","hb":"ba"},{"h":"ぱ","k":"パ","p":"па","hb":"pa"},{"h":"ま","k":"マ","p":"ма","hb":"ma"},{"h":"や","k":"ヤ","p":"я","hb":"ya"},{"h":"ゃ","k":"ャ","p":"я","hb":"ya"},{"h":"ら","k":"ラ","p":"ра","hb":"ra"},{"h":"わ","k":"ワ","p":"ва","hb":"wa"}],"1":[{"h":"い","k":"イ","p":"и","hb":"i"},{"h":"ぃ","k":"ィ","p":"и","hb":"i"},{"h":"き","k":"キ","p":"ки","hb":"ki"},{"h":"ぎ","k":"ギ","p":"ги","hb":"gi"},{"h":"し","k":"シ","p":"си","hb":"shi"},{"h":"じ","k":"ジ","p":"дзи","hb":"ji"},{"h":"ち","k":"チ","p":"ти","hb":"chi"},{"h":"ぢ","k":"ヂ","p":"дзи","hb":"ji"},{"h":"に","k":"ニ","p":"ни","hb":"ni"},{"h":"ひ","k":"ヒ","p":"хи","hb":"hi"},{"h":"び","k":"ビ","p":"би","hb":"bi"},{"h":"ぴ","k":"ピ","p":"пи","hb":"pi"},{"h":"み","k":"ミ","p":"ми","hb":"mi"},{"h":"","k":"","p":"","hb":""},{"h":"","k":"","p":"","hb":""},{"h":"り","k":"リ","p":"ри","hb":"ri"},{"h":"ん","k":"ン","p":"н","hb":"n"}],"2":[{"h":"う","k":"ウ","p":"у","hb":"u"},{"h":"ぅ","k":"ゥ","p":"у","hb":"u"},{"h":"く","k":"ク","p":"у","hb":"ku"},{"h":"ぐ","k":"グ","p":"гу","hb":"gu"},{"h":"す","k":"ス","p":"су","hb":"su"},{"h":"ず","k":"ズ","p":"дзу","hb":"zu"},{"h":"つ","k":"ツ","p":"цу","hb":"tsu"},{"h":"づ","k":"ヅ","p":"дзу","hb":"zu"},{"h":"ぬ","k":"ヌ","p":"ну","hb":"nu"},{"h":"ふ","k":"フ","p":"фу","hb":"fu"},{"h":"ぶ","k":"ブ","p":"бу","hb":"bu"},{"h":"ぷ","k":"プ","p":"пу","hb":"pu"},{"h":"む","k":"ム","p":"му","hb":"mu"},{"h":"ゆ","k":"ユ","p":"ю","hb":"yu"},{"h":"ゅ","k":"ュ","p":"ю","hb":"yu"},{"h":"る","k":"ル","p":"ру","hb":"ru"},{"h":"っ","k":"ッ","p":"цу","hb":"tsu"}],"3":[{"h":"え","k":"エ","p":"э","hb":"e"},{"h":"ぇ","k":"ェ","p":"э","hb":"e"},{"h":"け","k":"ケ","p":"кэ","hb":"ke"},{"h":"げ","k":"ゲ","p":"гэ","hb":"ge"},{"h":"せ","k":"セ","p":"сэ","hb":"se"},{"h":"ぜ","k":"ゼ","p":"дзэ","hb":"ze"},{"h":"て","k":"テ","p":"тэ","hb":"te"},{"h":"で","k":"デ","p":"дэ","hb":"de"},{"h":"ね","k":"ネ","p":"нэ","hb":"ne"},{"h":"へ","k":"ヘ","p":"хэ","hb":"he"},{"h":"べ","k":"ベ","p":"бэ","hb":"be"},{"h":"ぺ","k":"ペ","p":"пэ","hb":"pe"},{"h":"め","k":"メ","p":"мэ","hb":"me"},{"h":"","k":"","p":"","hb":""},{"h":"","k":"","p":"","hb":""},{"h":"れ","k":"レ","p":"рэ","hb":"re"},{"h":"ゔ","k":"ヴ","p":"в","hb":"v"}],"4":[{"h":"お","k":"オ","p":"о","hb":"o"},{"h":"ぉ","k":"ォ","p":"о","hb":"o"},{"h":"こ","k":"コ","p":"ко","hb":"ko"},{"h":"ご","k":"ゴ","p":"го","hb":"go"},{"h":"そ","k":"ソ","p":"со","hb":"so"},{"h":"ぞ","k":"ゾ","p":"дзо","hb":"zo"},{"h":"と","k":"ト","p":"то","hb":"to"},{"h":"ど","k":"ド","p":"до","hb":"do"},{"h":"の","k":"ノ","p":"но","hb":"no"},{"h":"ほ","k":"ホ","p":"хо","hb":"ho"},{"h":"ぼ","k":"ボ","p":"бо","hb":"bo"},{"h":"ぽ","k":"ポ","p":"по","hb":"po"},{"h":"も","k":"モ","p":"мо","hb":"mo"},{"h":"よ","k":"ヨ","p":"ё","hb":"yo"},{"h":"ょ","k":"ョ","p":"ё","hb":"yo"},{"h":"ろ","k":"ロ","p":"ро","hb":"ro"},{"h":"ー","k":"ー","p":"ᅠ","hb":"ᅠ"}]};

$(document).ready(function() {

	/**
	 * Построение таблицы символов
	 */
	var $table = $('.input-table');
	var $half;
	for (var i = 0; i < 17; i++) {
		switch (i) {
			case 0:
				$half = $('<div>', {class: 'table-half table-half-f  grid'});
				$table.append($half);
				break;

			case 9:
				$half = $('<div>', {class: 'table-half table-half-s  grid'});
				$table.append($half);
				break;
		}

		var $div = $('<div>', {class: 'chars-container  grid'});
		$.each(Object.keys(kana), function () {
			var v = kana[this][i];
			$div.append($('<div>', {
				'data-h': v.h,
				'data-k': v.k,
				class: 'char  flex bgc-first bgc-second-h pointer',
				prepend: $('<div>', {
					html: '<span class="hiragana">' + v.h + '</span><span class="separator  tc-second"> | </span><span class="katakana">' + v.k + '</span>'
				}),
				append: () => {
					if (v.hb) {
						return $('<span>', {
							class: 'hep  tc-second',
							html: v.hb
							})
							.add($('<span>', {
								class: 'pol  tc-second',
								html: v.p
							}
						));
					};
				}
			}));
		});
		$half.append($div);
	}

	/**
	 * Вывод одного звука
	 */ 
	var $results_container = $('.results-container');
	function renderSound(sound, version) {
		$results_container.append($('<div>', {
			class: 'result  grid bgc-first',
			append: $('<div>', {
				class: 'kana  br t-center',
				append: $('<div>', {
					class: 'hiragana  bb',
					html: sound.hiragana.replace(version, '<span class="tc-accent">' + version + '</span>')
				})
				.add($('<div>', {
					class: 'katakana',
					html: sound.katakana.replace(version, '<span class="tc-accent">' + version + '</span>')
				}))
			})
			.add($('<div>', {
				class: 'translate  br',
				html: () => {
					var str = '';
					if (sound.russian) {str += sound.russian + '<br>';}
					if (sound.english) {str += sound.english;}
					return str;
				}
			}))
			.add($('<div>', {
				class: 'meaning1  br',
				html: sound.meaning1
			}))
			.add($('<div>', {
				class: 'meaning2',
				html: sound.meaning2
			}))
		}));
	}

	/**
	 * Вывод всех результатов
	 */
	var results = {};
	function renderAllResults() {
		$results_container.html('');
		var has_exact = false;
		if ( Object.keys(results).length > 0 ) {
			var categories = ['exact', 'start', 'among'];
			if (typeof results[0] != 'undefined') {
				has_exact = true;
				$.each(categories, function(i, category) {
					$.each(results[0][category], function(j, sound) {
						renderSound(sound, results[0].version);
					});
				});
				delete results[0];
			}

			if ( Object.keys(results).length > 0 ) {
				if (has_exact) {
					$results_container.append($('<div>', {
						class: 'results-alert  bgc-first t-center',
						append: $('<div>', {
							html: 'Возможные совпадения'
						})
					}));
				} else {
					$results_container.append($('<div>', {
						class: 'results-alert  bgc-first t-center',
						append: $('<div>', {
							html: 'Точные совпадения не найдены, но есть возможные'
						})
					}));
				}
				$.each(results, function(i, result) {
					$.each(categories, function(j, category) {
						$.each(result[category], function(k, sound) {
							renderSound(sound, result.version);
						});
					});
				});
			}
		} else {
			$results_container.append($('<div>', {
				class: 'results-alert  bgc-first t-center',
				append: $('<div>', {
					html: 'Поиск не дал результатов'
				})
			}));
		}
	}

	/**
	 * Добавить в список результатов
	 */
	var used = [];
	function addToResults(index, category, sound, version) {
		used.push(sound.hiragana);
		if (typeof results[index] == 'undefined') {
			results[index] = {exact: [], start: [], among: [], version: version};
		}
		results[index][category].push(sound);
	}

	/**
	 * Поиск
	 */
	function startSearching(versions, only_kana) {
		results = {};
		used = [];
		// Есть ли символы кроме каны
		if (only_kana) {
			$.each(sounds, function (i, sound) {
				$.each(versions, function(j, version) {
					if (used.indexOf(sound.hiragana) == -1) {

						var letter_indexs = [sound.hiragana.indexOf(version), sound.katakana.indexOf(version)];
						var category = false;
						switch (true) {
							// Если точно совпадает
							case (sound.hiragana == version || sound.katakana == version):
								category = 'exact';
								break;

							// Если совпадение в начале строки
							case (letter_indexs[0] == 0 || letter_indexs[1] == 0):
								category = 'start';
								break;

							// Если совпадение есть в принципе
							case (letter_indexs[0] != -1 || letter_indexs[1] != -1):
								category = 'among';
								break;
						}

						if (category) addToResults(j, category, sound, version);
					}
				});
			});
		} else {
			results = $.map(sounds, function (sound) {
				var flag = false;
				$.each(Object.keys(sound), function (j, key) {
					if ( sound[key].indexOf(versions[0]) != -1 ) flag = true;
				});
				if (flag) return sound;
			});
		}

		renderAllResults();
	}



	/**
	 * Подготовка
	 */
	$(document).ready(function() {
		var options = Cookies.get('options');

		// Изменение значения radio-button'ов
		$('[type=radio]').on('change', function () {
			var type = $(this).closest('[data-radio-type]').data("radio-type");
			$('.input-table').attr('data-' + type, $(this).data(type));
			options[type] = $(this).data(type);
			Cookies.set('options', JSON.stringify(options));

			if (type != 'transliteration' && options.kana != 'hk' && options.kana != options.input) {
				switch (type) {
					case 'kana':
						$('.input-radio-table [type=radio][data-input="' + options[type] + '"]').click();
						break;

					case 'input':
						$('.kana-radio-table [type=radio][data-kana="' + options[type] + '"]').click();
						break;
				}
			}
		});

		// Восстановление последних используемых настроек
		if (typeof options == 'undefined') {
			options = {
				kana: 'hk',
				transliteration: 'h',
				input: 'h'
			};
		} else {
			options = JSON.parse(options);
			$.each(Object.keys(options), function (i, key) {
				$('[type=radio][data-' + key + '="' + options[key] + '"]').click();
			});
		}

		// Ввод символов
		var $input = $('.input');
		$('.input-table').on('click', '.char', function() {
			$input.val($input.val() + $(this).data(options.input));
			$('.input').keyup();
		});

		// Очистка поля ввода
		$('.input-clear').on('click', function() {
			$input.val('');
			$results_container.html('');
		});

		// Создание схожих вариантов с последующим поиском
		var last_input = '';
		$('.input').on('keyup', function() {
			var value = $(this).val();
			if (last_input != value) {
				last_input = value;
				if (value.length > 0) {
					var versions = [value];
					var only_kana = !/[^ぁ-んァ-ンーゔヴ]/g.test(versions[0]);
					if (only_kana) {
						for (var i = 0; i < value.length; i++) {
							var new_versions = [];
						  $.each(versions, function (j, v) {
					  		$.each(sims.list[value[i]], function () {
						  		new_versions.push( (v.substring(0, i) + this + v.substring(i+1)) );
					  		});
						  });
						  versions = versions.concat(new_versions);
						}
					}

					var sorted_versions = [[],[],[]];
					for (var i = 1; i < versions.length; i++) {
						var has_most = false;
						var has_not_most = false;
						$.each(Array.from(versions[0]), function (j, l) {
							if (l != versions[i][j]) {
								if (sims.most.indexOf(versions[i][j]) != -1) {
									has_most = true;
								} else {
									has_not_most = true;
								}
							};
						});

						switch (true) {
							case (has_most && !has_not_most):
								sorted_versions[0].push(versions[i]);
								break;

							case (has_most && has_not_most):
								sorted_versions[1].push(versions[i]);
								break;

							case (!has_most && has_not_most):
								sorted_versions[2].push(versions[i]);
								break;
						}
					}
					versions = [versions[0]].concat(sorted_versions[0], sorted_versions[1], sorted_versions[2]);

					startSearching(versions, only_kana);
				} else {
					$results_container.html('');
				}
			}
		});
	});
	
});